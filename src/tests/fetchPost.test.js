import axios from "axios";
import { waitFor } from "@testing-library/react";
import { renderHook } from "@testing-library/react-hooks";
import useFetchPost from '../hooks/useFetchPost';

jest.mock("axios");

let mockConsoleError;

const mockData = {
    data: {
        data: {
            children: ''
        }
    }
}

describe("given usefetchPost hook", () => {
    beforeEach(() => {
        axios.get.mockResolvedValue(mockData);

        // mock console.error to avoid expected error messages during tests
        mockConsoleError = jest
            .spyOn(console, "error")
            .mockResolvedValue(jest.fn());
    });

    it("should fetch data from provided URL", async () => {
        const url = "https://test-api.com/animals";
        const { result } = renderHook(() => useFetchPost(url));

        expect(axios.get).toHaveBeenCalledTimes(1);
        expect(axios.get).toHaveBeenCalledWith(`${url}.json`, {
        });
        await waitFor(() => expect(result.current.response).toEqual(mockData.data.data.children));
        expect(result.current.isError).toBe(false);
    });

    describe("when the API returns an error", () => {
        beforeEach(() => {
            axios.get.mockRejectedValue(new Error("An error occurred"))
        });

        it("should handle error properly", async () => {
            const url = "https://test-api.com/animals";
            const { result } = renderHook(() => useFetchPost(url));

            expect(axios.get).toHaveBeenCalledTimes(1);
            expect(axios.get).toHaveBeenCalledWith(`${url}.json`, {});
            // 2. wait for result.current.iserror to be true
            await waitFor(() => expect(result.current.isError).toBe(true));
        });
    });

    describe("when the fetchNext function is called", () => {
        it("should re-fetch data from provided URL", async () => {
            const url = "https://test-api.com/animals";
            const { result } = renderHook(() => useFetchPost(url));
            result.current.fetchPost();
            expect(axios.get).toHaveBeenCalledTimes(2);
            expect(axios.get).toHaveBeenCalledWith(`${url}.json`, {});
            await waitFor(() => expect(result.current.response).toEqual(mockData.data.data.children));
            expect(result.current.isError).toBe(false);
        });
    });
});


import CommentsActions from "../components/post/comment actions/CommentsActions";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";

const commentsMock = [
    "test comment", "test comment 2"
];

const handleClick = jest.fn();

const renderComponent = () => {
    return render(<CommentsActions comments={commentsMock} />)
};

describe("the comments icon is rendered", () => {
    beforeEach(() => {
         waitFor(() => {
            renderComponent();
        })
    });

    it("then should display icon", () => {

        expect(
            screen.getByAltText("comments icon")
        ).toBeInTheDocument();
    });

    // it("then should open the comments module when clicked", () => {

    //     fireEvent.click(screen.getAllByAltText('comments icon')[0]);
    //     expect(handleClick).toHaveBeenCalled();
    // })
});
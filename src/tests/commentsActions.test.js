import CommentsActions from "../components/post/comment actions/CommentsActions";
import { fireEvent, render, screen } from "@testing-library/react";

const commentsMock = [
    "test comment", "test comment 2"
];

const handleClick = jest.fn();

const renderComponent = () => render(<CommentsActions comments={commentsMock} />);

describe("the comments icon is rendered", () => {
    it("then should display icon", () => {
        renderComponent();
        expect(
            screen.getByAltText("comments icon")
        ).toBeInTheDocument();
    });
});
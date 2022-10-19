import { fireEvent, render, screen } from "@testing-library/react";
import Post from "../components/post/post";

const postMock = {
    author: 'Callum',
    created: '',
    title: 'Test Post',
    link_flair_text: 'General test',
    thumbnail: 'public/communityIcon_1rqm2nd9vzb41.png',
    ups: 12,
    num_comments: 100,
    permalink: 'test'
};

const renderComponent = () => render(<Post post={postMock} />);

describe("given the post component is rendered", () => {
    beforeEach(() => {
        renderComponent();
    });

    it("should then contain an author", () => {
        expect(
            screen.getByRole("heading", { author: 'Callum' }, { level: 3 })
        ).toBeInTheDocument();
    });

    it("should also have a date of creation", () => {
        expect(
            screen.getByRole("heading", { created: '' }, { level: 4 })
        ).toBeInTheDocument();
    });

    it("should contain a main title", () => {
        expect(
            screen.getByRole("heading", { title: 'Test Post' }, { level: 2 })
        ).toBeInTheDocument();
    });

    it("should also have a thumbnail image", () => {
        expect(
            screen.getByRole("img", { name: 'Test Post' })
        ).toHaveAttribute("src", 'public/communityIcon_1rqm2nd9vzb41.png')
    });
});





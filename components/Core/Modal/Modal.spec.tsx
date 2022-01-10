import { render } from "@testing-library/react";
import Modal from "./Modal";

describe("Modal", () => {
  test("renders Modal component", () => {
    render(<Modal onClose={jest.fn()}>Test</Modal>);
  });
});

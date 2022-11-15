import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue";
import ACard from "../ACard.vue";

describe("ACard", () => {
  const setup = () => {
    return render(ACard, {
      slots: {
        default: "<p>content</p>"
      }
    });
  }

  describe("Layout", () => {
    it("should render", () => {
      const { getByTestId } = setup();
      expect(getByTestId("ACard")).toBeInTheDocument();
    });
    it("should render the slot", () => {
      const { getByText } = setup();
      expect(getByText("content")).toBeInTheDocument();
    });
  });
});
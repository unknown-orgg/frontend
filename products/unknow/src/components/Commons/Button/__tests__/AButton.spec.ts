import { describe, it, expect } from "vitest";
import { render, RenderResult } from "@testing-library/vue";
import AButton from "../AButton.vue";

interface iPropsFake {
  label: string;
}
describe("AButton", () => {
  const setupRender = (props: iPropsFake): RenderResult => { 
    return render(AButton, {
      props
    });
  };

  describe("Layout", () => {
    it("should render layout", () => {
      const { getByText } = setupRender({
        label: "text-fake"
      });
      expect(getByText("text-fake")).toBeInTheDocument();
    });
  });
});
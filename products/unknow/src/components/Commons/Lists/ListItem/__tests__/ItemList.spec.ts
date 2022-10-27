import { render } from "@testing-library/vue";
import { describe, it, expect } from "vitest";
import ListItem from "../ListItem.vue";

interface iPropsFake {
  content: string;
}

describe("ItemList", () => {
  const setup = (props: iPropsFake) => {
    return render(ListItem, { props })
  }

  it("should render", () => {
    const { getByText } = setup({ content: "item-fake" });
    expect(getByText("item-fake")).toBeInTheDocument();
  })
});
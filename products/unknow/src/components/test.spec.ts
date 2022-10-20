import { describe, it, expect } from "vitest";
import { render } from "@testing-library/vue"
import HelloWorld from "./HelloWorld.vue";

describe("", () => {

  it("should render", () => {

    const { getByTestId } = render(HelloWorld);
    expect(getByTestId("hello-world")).toBeInTheDocument();
  })
});
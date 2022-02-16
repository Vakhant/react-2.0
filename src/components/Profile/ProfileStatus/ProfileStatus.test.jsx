import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "./ProfileStatus";

describe("ProfileStatus component", () => {
    test("Status from props should be in the state", () => {
      const component = create(<ProfileStatus status="LookEach" />);
      const instance = component.getInstance();
      console.log(component);
      expect(instance.state.status).toBe("LookEach");
    });

    test("after creation <span/> should be displayed with correct status", () => {
      const component = create(<ProfileStatus status="LookEach" />);
      const root = component.root;
      let span = root.findByType('span')
      expect(span.innerText).toBe("LookEach");
    });
});
import { expect } from "chai";
import { DecoratorStore } from "../DecoratorStore";

const DemoDecorator = () => {};

class DemoClass {}

describe("DecoratorStore", () => {
  describe("get", () => {
    it("Returns undefined if class was not found", () => {
      expect(DecoratorStore.get(DemoClass, DemoDecorator)).equal(undefined);
    });

    it("Returns undefined if decorator was not found", () => {
      DecoratorStore.set(DemoClass, () => {}, "demo");
      expect(DecoratorStore.get(DemoClass, DemoDecorator)).equal(undefined);
    });
  });

  describe("set", () => {
    it("Returns set decorator value", () => {
      DecoratorStore.set(DemoClass, DemoDecorator, "demo");
      const value = DecoratorStore.get(DemoClass, DemoDecorator);
      expect(value).equal("demo");
    });

    it("Returns reset decorator value", () => {
      DecoratorStore.set(DemoClass, DemoDecorator, "demo");
      DecoratorStore.set(DemoClass, DemoDecorator, "demo2");
      const value = DecoratorStore.get(DemoClass, DemoDecorator);
      expect(value).equal("demo2");
    });
  });
});

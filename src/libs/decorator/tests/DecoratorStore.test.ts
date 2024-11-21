import { expect } from "chai";
import { DecoratorStore } from "../DecoratorStore";

const DemoDecorator = () => {};

const DemoDecorator2 = () => {};

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

    it("Returns correct decorator value if multiple were added", () => {
      DecoratorStore.set(DemoClass, DemoDecorator, "demo");
      DecoratorStore.set(DemoClass, DemoDecorator2, "demo2");
      expect(DecoratorStore.get(DemoClass, DemoDecorator)).equal("demo");
      expect(DecoratorStore.get(DemoClass, DemoDecorator2)).equal("demo2");
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

import { JSDOM } from "jsdom";
import DOMValidator from "../../../../lib/client/validators/DOMValidator";
describe("DOMValidator", () => {
  let dom: JSDOM, document: Document;
  beforeEach(() => {
    dom = new JSDOM(`
		<html>
			<body>
				<div id="divElement"></div>
				<span id="spanElement"></span>
				<button id="buttonElement" class="btn">Button</button>
				<input id="textInput" type="text" />
				<input id="checkInput" type="checkbox" />
				<input id="radioInput" type="radio" />
				<img id="imgElement" />
				<input id="imageInput" type="image" src="submit.png" />
				<input id="numberInput" type="number" />
				<textarea id="textareaElement"></textarea>
				<select id="selectElement">
					<option value="1">One</option>
				</select>
				<table id="tableElement"></table>
			</body>
		</html>
    `);
    document = dom.window.document;
  });
  describe("hasAnyClass", () => {
    it("should return true if element has any class from the compared list", () => {
      const btn = document.getElementById("buttonElement")!;
      expect(DOMValidator.hasAnyClass(btn, ["btn", "foo"])).toBe(true);
      expect(DOMValidator.hasAnyClass(btn, ["notExist"])).toBe(false);
    });
  });
  describe("isGeneric", () => {
    it("should return true if element is a div or span", () => {
      expect(
        DOMValidator.isGeneric(document.getElementById("divElement")!)
      ).toBe(true);
      expect(
        DOMValidator.isGeneric(document.getElementById("spanElement")!)
      ).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isGeneric(document.getElementById("buttonElement")!)
      ).toBe(false));
  });
  describe("isButton", () => {
    it("should return true if element is a default button or has role/button classes", () => {
      expect(
        DOMValidator.isButton(document.getElementById("buttonElement")!)
      ).toBe(true);
      const customBtn = document.createElement("div");
      customBtn.classList.add("button");
      expect(DOMValidator.isButton(customBtn)).toBe(true);
    });
  });
  describe("isCheckable", () => {
    it("should return true if element is a default or custom checkbox or radio", () => {
      expect(
        DOMValidator.isCheckable(document.getElementById("checkInput")!)
      ).toBe(true);
      expect(
        DOMValidator.isCheckable(document.getElementById("radioInput")!)
      ).toBe(true);
      const customCheckable = document.createElement("div");
      customCheckable.classList.add("checkbox");
      expect(DOMValidator.isCheckable(customCheckable)).toBe(true);
    });
  });
  describe("isImage", () => {
    it("should return true if element is a default image or custom image role/class", () => {
      expect(DOMValidator.isImage(document.getElementById("imgElement")!)).toBe(
        true
      );
      const customImage = document.createElement("div");
      customImage.classList.add("img");
      expect(DOMValidator.isImage(customImage)).toBe(true);
    });
  });
  describe("isDefaultTextbox", () => {
    it("should return true if element is an <input type='text'> or <textarea>", () => {
      expect(
        DOMValidator.isDefaultTextbox(document.getElementById("textInput")!)
      ).toBe(true);
      expect(
        DOMValidator.isDefaultTextbox(
          document.getElementById("textareaElement")!
        )
      ).toBe(true);
    });
    it("should return false otherwise", () => {
      const checkInput = document.getElementById("checkInput")!;
      expect(DOMValidator.isDefaultTextbox(checkInput)).toBe(false);
    });
  });
  describe("isCustomTextbox", () => {
    it("should return true if element has contentEditable='true' and class='textbox'", () => {
      const customTextbox = document.createElement("div");
      customTextbox.contentEditable = "true";
      customTextbox.classList.add("textbox");
      expect(DOMValidator.isCustomTextbox(customTextbox)).toBe(true);
    });
    it("should return false otherwise", () => {
      const randomDiv = document.createElement("div");
      randomDiv.contentEditable = "true";
      expect(DOMValidator.isCustomTextbox(randomDiv)).toBe(false);
      const customTextboxNoCE = document.createElement("div");
      customTextboxNoCE.classList.add("textbox");
      expect(DOMValidator.isCustomTextbox(customTextboxNoCE)).toBe(false);
    });
  });
  describe("isTextbox", () => {
    it("should return true if element is a default textbox or a custom textbox", () => {
      expect(
        DOMValidator.isTextbox(document.getElementById("textInput")!)
      ).toBe(true);
      const customTextbox = document.createElement("div");
      customTextbox.contentEditable = "true";
      customTextbox.classList.add("textbox");
      expect(DOMValidator.isTextbox(customTextbox)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isTextbox(document.getElementById("checkInput")!)
      ).toBe(false));
  });
  describe("isDefaultCheckbox", () => {
    it("should return true if element is an <input type='checkbox'>", () =>
      expect(
        DOMValidator.isDefaultCheckbox(document.getElementById("checkInput")!)
      ).toBe(true));
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultCheckbox(document.getElementById("textInput")!)
      ).toBe(false));
  });
  describe("isCustomCheckbox", () => {
    it("should return true if element has role='checkbox' or class='checkbox'", () => {
      const customCheckable = document.createElement("div");
      customCheckable.classList.add("checkbox");
      expect(DOMValidator.isCustomCheckbox(customCheckable)).toBe(true);
      const roleCheckbox = document.createElement("div");
      roleCheckbox.setAttribute("role", "checkbox");
      expect(DOMValidator.isCustomCheckbox(roleCheckbox)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isCustomCheckbox(document.createElement("div"))).toBe(
        false
      ));
  });
  describe("isCheckbox", () => {
    it("should return true if element is a default or custom checkbox", () => {
      expect(
        DOMValidator.isCheckbox(document.getElementById("checkInput")!)
      ).toBe(true);
      const customCheckable = document.createElement("div");
      customCheckable.classList.add("checkbox");
      expect(DOMValidator.isCheckbox(customCheckable)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isCheckbox(document.getElementById("textInput")!)
      ).toBe(false));
  });
  describe("isDefaultRadio", () => {
    it("should return true if element is an <input type='radio'>", () =>
      expect(
        DOMValidator.isDefaultRadio(document.getElementById("radioInput")!)
      ).toBe(true));
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultRadio(document.getElementById("checkInput")!)
      ).toBe(false));
  });
  describe("isCustomRadio", () => {
    it("should return true if element has role='radio' or class='radio'", () => {
      const customRadio = document.createElement("div");
      customRadio.classList.add("radio");
      expect(DOMValidator.isCustomRadio(customRadio)).toBe(true);
      const roleRadio = document.createElement("div");
      roleRadio.setAttribute("role", "radio");
      expect(DOMValidator.isCustomRadio(roleRadio)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isCustomRadio(document.createElement("div"))).toBe(
        false
      ));
  });
  describe("isRadio", () => {
    it("should return true if element is a default or custom radio", () => {
      expect(DOMValidator.isRadio(document.getElementById("radioInput")!)).toBe(
        true
      );
      const customRadio = document.createElement("div");
      customRadio.classList.add("radio");
      expect(DOMValidator.isRadio(customRadio)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isRadio(document.getElementById("checkInput")!)).toBe(
        false
      ));
  });
  describe("isCustomCheckable", () => {
    it("should return true if element is custom checkbox/radio or has class='checkable'", () => {
      const customCheckable = document.createElement("div");
      customCheckable.classList.add("checkbox");
      expect(DOMValidator.isCustomCheckable(customCheckable)).toBe(true);
      const classCheckable = document.createElement("div");
      classCheckable.classList.add("checkable");
      expect(DOMValidator.isCustomCheckable(classCheckable)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isCustomCheckable(document.createElement("div"))
      ).toBe(false));
  });
  describe("isDefaultCheckable", () => {
    it("should return true if element is <input type='checkbox' or 'radio'>", () => {
      expect(
        DOMValidator.isDefaultCheckable(document.getElementById("checkInput")!)
      ).toBe(true);
      expect(
        DOMValidator.isDefaultCheckable(document.getElementById("radioInput")!)
      ).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultCheckable(document.getElementById("textInput")!)
      ).toBe(false));
  });
  describe("isCheckable", () => {
    it("should return true if element is default or custom checkable", () => {
      expect(
        DOMValidator.isCheckable(document.getElementById("checkInput")!)
      ).toBe(true);
      const customCheck = document.createElement("div");
      customCheck.classList.add("checkbox");
      expect(DOMValidator.isCheckable(customCheck)).toBe(true);
    });
  });
  describe("isDefaultPressable", () => {
    it("should return true if element is a <button> or <input type='button'|'submit'|'reset'>", () => {
      const buttonElement = document.getElementById("buttonElement")!;
      expect(DOMValidator.isDefaultPressable(buttonElement)).toBe(true);

      const inputBtn = document.createElement("input");
      inputBtn.type = "button";
      expect(DOMValidator.isDefaultPressable(inputBtn)).toBe(true);
    });
    it("should return false otherwise", () => {
      const textInput = document.getElementById("textInput")!;
      expect(DOMValidator.isDefaultPressable(textInput)).toBe(false);
    });
  });
  describe("isCustomPressable", () => {
    it("should return true if element is a custom button or has class='pressable'", () => {
      const customBtn = document.createElement("div");
      customBtn.classList.add("button");
      expect(DOMValidator.isCustomPressable(customBtn)).toBe(true);
      const pressableDiv = document.createElement("div");
      pressableDiv.classList.add("pressable");
      expect(DOMValidator.isCustomPressable(pressableDiv)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isCustomPressable(document.createElement("div"))
      ).toBe(false));
  });
  describe("isPressable", () => {
    it("should return true if element is default or custom pressable", () => {
      expect(
        DOMValidator.isPressable(document.getElementById("buttonElement")!)
      ).toBe(true);
      const pressableDiv = document.createElement("div");
      pressableDiv.classList.add("pressable");
      expect(DOMValidator.isPressable(pressableDiv)).toBe(true);
    });
  });
  describe("isDefaultImage", () => {
    it("should return true if element is an <img> or <input type='image'>", () => {
      expect(
        DOMValidator.isDefaultImage(document.getElementById("imgElement")!)
      ).toBe(true);
      expect(
        DOMValidator.isDefaultImage(document.getElementById("imageInput")!)
      ).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultImage(document.getElementById("textInput")!)
      ).toBe(false));
  });
  describe("isCustomImage", () => {
    it("should return true if element has role='img' or class='img'/'image'", () => {
      const customImg = document.createElement("div");
      customImg.classList.add("img");
      expect(DOMValidator.isCustomImage(customImg)).toBe(true);
      const roleImg = document.createElement("div");
      roleImg.setAttribute("role", "img");
      expect(DOMValidator.isCustomImage(roleImg)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isCustomImage(document.createElement("div"))).toBe(
        false
      ));
  });
  describe("isImage", () => {
    it("should return true if element is a default or custom image", () => {
      expect(DOMValidator.isImage(document.getElementById("imgElement")!)).toBe(
        true
      );
      const customImg = document.createElement("div");
      customImg.classList.add("img");
      expect(DOMValidator.isImage(customImg)).toBe(true);
    });
  });
  describe("isTable", () => {
    it("should return true if element is <table> or has class='table'", () => {
      expect(
        DOMValidator.isTable(document.getElementById("tableElement")!)
      ).toBe(true);
      const customTable = document.createElement("div");
      customTable.classList.add("table");
      expect(DOMValidator.isTable(customTable)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isTable(document.getElementById("divElement")!)).toBe(
        false
      ));
  });
  describe("isDefaultRequireableInput", () => {
    it("should return true for input fields except button|reset|submit|hidden|image", () => {
      expect(
        DOMValidator.isDefaultRequireableInput(
          document.getElementById("numberInput")!
        )
      ).toBe(true);
      expect(
        DOMValidator.isDefaultRequireableInput(
          document.getElementById("imageInput")!
        )
      ).toBe(false);
      const hiddenInput = document.createElement("input");
      hiddenInput.type = "hidden";
      document.body.appendChild(hiddenInput);
      expect(DOMValidator.isDefaultRequireableInput(hiddenInput)).toBe(false);
      const submitInput = document.createElement("input");
      submitInput.type = "submit";
      document.body.appendChild(submitInput);
      expect(DOMValidator.isDefaultRequireableInput(submitInput)).toBe(false);
    });
  });
  describe("isDefaultWritableInput", () => {
    it("should return true if input is text, number, email, password, etc.", () => {
      expect(
        DOMValidator.isDefaultWritableInput(
          document.getElementById("textInput")!
        )
      ).toBe(true);
      expect(
        DOMValidator.isDefaultWritableInput(
          document.getElementById("numberInput")!
        )
      ).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultWritableInput(
          document.getElementById("checkInput")!
        )
      ).toBe(false));
  });
  describe("isCustomSelector", () => {
    it("should return true if element has role='listbox'|'menubox'|'combobox'", () => {
      const listboxDiv = document.createElement("div");
      listboxDiv.setAttribute("role", "listbox");
      expect(DOMValidator.isCustomSelector(listboxDiv)).toBe(true);
      const comboDiv = document.createElement("div");
      comboDiv.setAttribute("role", "combobox");
      expect(DOMValidator.isCustomSelector(comboDiv)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isCustomSelector(document.createElement("div"))).toBe(
        false
      ));
  });
  describe("isCustomEntry", () => {
    it("should return true if element is custom checkable/textbox/selector", () => {
      const customCheckbox = document.createElement("div");
      customCheckbox.classList.add("checkbox");
      expect(DOMValidator.isCustomEntry(customCheckbox)).toBe(true);
      const customTextbox = document.createElement("div");
      customTextbox.contentEditable = "true";
      customTextbox.classList.add("textbox");
      expect(DOMValidator.isCustomEntry(customTextbox)).toBe(true);
      const customSelector = document.createElement("div");
      customSelector.setAttribute("role", "listbox");
      expect(DOMValidator.isCustomEntry(customSelector)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(DOMValidator.isCustomEntry(document.createElement("div"))).toBe(
        false
      ));
  });
  describe("isDefaultEntry", () => {
    it("should return true if element is a requireable <input>, <textarea>, or <select>", () => {
      expect(
        DOMValidator.isDefaultEntry(document.getElementById("numberInput")!)
      ).toBe(true);
      expect(
        DOMValidator.isDefaultEntry(document.getElementById("textareaElement")!)
      ).toBe(true);
      expect(
        DOMValidator.isDefaultEntry(document.getElementById("selectElement")!)
      ).toBe(true);
    });
    it("should return false otherwise", () => {
      expect(
        DOMValidator.isDefaultEntry(document.getElementById("imageInput")!)
      ).toBe(false);
      expect(
        DOMValidator.isDefaultEntry(document.getElementById("buttonElement")!)
      ).toBe(false);
    });
  });
  describe("isEntry", () => {
    it("should return true if element is a default or custom entry", () => {
      expect(DOMValidator.isEntry(document.getElementById("textInput")!)).toBe(
        true
      );
      const customEntry = document.createElement("div");
      customEntry.classList.add("checkbox");
      expect(DOMValidator.isEntry(customEntry)).toBe(true);
    });
  });
  describe("isCustomDisableable", () => {
    it("should return true if element is custom pressable or custom entry", () => {
      const customPressable = document.createElement("div");
      customPressable.classList.add("button");
      expect(DOMValidator.isCustomDisableable(customPressable)).toBe(true);
      const customEntry = document.createElement("div");
      customEntry.classList.add("checkbox");
      expect(DOMValidator.isCustomDisableable(customEntry)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isCustomDisableable(document.createElement("div"))
      ).toBe(false));
  });
  describe("isDefaultDisableable", () => {
    it("should return true if element is a default pressable or default entry", () => {
      expect(
        DOMValidator.isDefaultDisableable(
          document.getElementById("buttonElement")!
        )
      ).toBe(true);
      expect(
        DOMValidator.isDefaultDisableable(document.getElementById("textInput")!)
      ).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDefaultDisableable(
          document.getElementById("imgElement")!
        )
      ).toBe(false));
  });
  describe("isDisableable", () => {
    it("should return true if element is default or custom disableable", () => {
      expect(
        DOMValidator.isDisableable(document.getElementById("buttonElement")!)
      ).toBe(true);
      const customPressable = document.createElement("div");
      customPressable.classList.add("button");
      expect(DOMValidator.isDisableable(customPressable)).toBe(true);
    });
    it("should return false otherwise", () =>
      expect(
        DOMValidator.isDisableable(document.getElementById("imgElement")!)
      ).toBe(false));
  });
});

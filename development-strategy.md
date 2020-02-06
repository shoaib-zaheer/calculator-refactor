# Name of Project

user story

- [wireframe](#Wireframe)

- [DOM](#DOM)
- [Styling](#Styling)
- [Listeners](#Listeners)
- [Handlers](#Handlers)
- [Logic](#Logic)


## DOM

|Tag|Attributes|Role|
|---|---|---|
|**< form >**||**The** form will have all the elements for this calculator|
|**< input >**|*id="value1" & id="value2"*|**Both** input will have the numbers to be calculate (value 1 will have `"a"` number ~&~ value 2 will have `"b"` number).|
|**< select >**|*id="operator"*|**This** section will content the `mathematical operations` for user to choose and process the operation.|
|**< option >**|*value="add/ min/ div & mul"*|**Every** option will content on value and every value have one `mathematical operations`|
|**< button >**|*type="button"*|**The** purpose of having `button` is to let the program know to start processing user request.|

## Styling

|Tag|Attributes|Role|
|---|---|---|
|**Class= body**|*`margin`, `background` & `font(disruption)`.* |**This** change will effect the bod of the page.|
|**Class= box**|*`display`, `width`, `margin(around)`, `background(elements)`, `border` & `shadow`.*|**This** box will hold all the `elements` in this page.|
|**Class= box1**|*`flex`*|**To** position all the elements in side `form` in `column` formate.|
|**Class= value-box**|*`margin`, `padding`, `background`, `border`, `text` & `font`.*|**This** will show the user input in good and visible format.|
|**Class= selector**|*`font`, `border`, `background`, `padding`, `margin`, & `cursor`.*|**This** will make the option or `select` elements visible for user.|
|**ID= Button**|*`font`, `border`, `background`, `padding`, `margin`, & `cursor`.*|**This** will make the option or `button` visible for user.|
|**ID= num-last**|*`display`, `text/font`, `padding/margin` & `color`*|**Where** the outcome of calculation for user will show.|

## Listeners

|Tag|Attributes|Role|
|---|---|---|
|**document**| *---* |**document** is grape the value from `DOM` (or to show `tag` is in `HTML` file).|
|**querySelector**|*--*|**This** is a mutate to select or pick a  specific `element` from website.|
|**button**|*--*|**To** the element `(class or ID)` from *DOM*, we use `querySelector`.|
|**addEventListener**|*--*|**The** `addEventListener()` *method* attaches an event handler to an element without overwriting existing event handlers. ... When using the `addEventListener()` *method*, the JavaScript is separated from the `HTML` markup, for better readability and allows you to add event listeners even when you do not control the HTML markup.|
|**click**|*--*|**In** here `click` act as **event** for `addEventListener` to work and show if the button is click or not.|
|**=>**|*--*|**Here** `=>` **aero function** acting as `function`.|
|**console.log**|*--*|**console.log** to check if our `script` is working or not.|

## Handlers

|Tag|Attributes|Role|
|---|---|---|
|**function**|*--*|**function** to create an event.|
|**var**| *---* |**Is** used here to show the elements .|
|**if(){}**|*--*|**Is** usded here to create some conditions to check.|
|**else if (){}**|*--*|**To** see if first condition is not good check second condition in `else` .|
|**console.log**|*--*|**Used** here to check for developer side to view if the program is working. |

## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| | | | |

## Wireframe
![calculatorjs](https://user-images.githubusercontent.com/59531766/73894288-49d40e00-487c-11ea-8150-6359d8269555.png)

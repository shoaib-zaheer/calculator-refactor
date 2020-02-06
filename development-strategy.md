# Name of Project

user story

[ Wireframe](https://wireframe.cc/EXrXeN)



## DOM

| tag name | attributes | role |
-------- | ---------- | -------
| form| input| give number for value 1|
| form| input| give number for value 2 |
| form| operator| selection area for operators(+, -, *, /) |
| form| button| click and ready for answer|
| div | space | space for result|

## Styling

| class name | description | role |
-------|--------|----------|
| section| It contain form and result space| To make clear for users which place is giving value and result expectation.I try to give different color.|
| h1| heading of the page|To answer "What is this form?" |
| #finalBox| box for result|contain answer place |


## Listeners

| type | attached to | callback |
------|----------|---------
| click.event(action) | the result box with calculate form| call back the result = calculate|


## Handlers

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
|  function calc(a,b,op)| value 1, value 2, op(div, min, mul and add)| result | callback the function |



## Logic

| syntax | parameters | return value | behavior |
| --- | --- | --- | --- |
| calculate = doMath(a, b, op)| value 1, value 2, operations| true value| test|


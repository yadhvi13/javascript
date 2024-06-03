# javascript
learning code for js
# js is single threaded
GLOBAL EXECUTION .....> this 
GLOBAL EXECUTION context
function execution context
eval execution context ----> mongo

#memory creation phase --> allocate memory for declaration
#Execution phase ----> execute code

#EXAMPLE
let val = 10
let val2 = 5
function addNum(num1,num2){
    let total = num1 + num2
    return total
}
let result1 = addNum(val,val2)
let result2 = addNum(10,2)


-----> val = undefined
val2 = undefined
addnum = defination
result1 = undefined
result2 = undefined

# execution phase 
value = 10
value2 = 5

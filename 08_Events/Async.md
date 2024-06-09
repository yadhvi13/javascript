# Javascript 
           |__________ Synchronous (line by line code)
## Default Js Behaviour |____ Single threaded (execution in single thread)

# execution context
 |__ execute one line of code at a time
 |__ console.log 1
 |__ console.log 2
 |
 Each operation waits for the last one to complete before executing
 # CALL STACK       # MEMORY HEAP

 ## Blocking Code     (vs)       NON-Blocking code
      |                             |
block the flow at program      doesn't block execution           
      |                             |  
   Read file sync                Read filr Async   
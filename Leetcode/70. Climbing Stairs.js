//how many ways i can climb 4 stairs?
// 1 + 1 + 1 + 1
// 1 + 1 + 2
// 2 + 1 + 1
// 2 + 2
// 1 + 2 + 1
// total ways are 5 ways okay

/*
how can we reach step7? using 2 steps from step5 and 1 step from step6 right?
and similary since we know, to climb step3, we can do 1+1+1, 2+1, 1+2 = 3 steps ok?
and to confirm this on our 1st logic, to reach step3 we can take 2 steps from step1 and 1 step from step2.
to reach step1 =  1 way
to reach step2 = 1+1, 2 = 2 way
so, we can add this, number of ways to  reach step3 = ways to reach step2 + ways to reach step1 
*/

var climbStairs = function(n) {
    if(n===1) return 1;
    if(n===2) return 2;
    const stepArray = [1,2]
    if(n >=3){
        
    }
};

climbStairs(3)
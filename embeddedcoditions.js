// Practice with more information
const myUsername = 'Zarya';
const myPassword = '9876';
const salary = 80000;

const employeeUsername = 'Zarya';
const employeePassword = '9876';
const ceoUsername = 'Xyrho';
const ceoPassword = 'hunter2';
const juniorSalaryMinimum = 50000;
const juniorSalaryMaximum = 70000;
const intermediateSalaryMinimum = 75000;
const intermediateSalaryMaximum = 90000;
const seniorSalaryMinimum = 95000;
const seniorSalaryMaximum = 120000;
const ceoSalaryMinimum = 110000;

process.stdout.write('\n15. ');
/*
15. We have another authentication, but this time with a salary as well. 
We want to print a personalized welcome message to users who log in. 
For example, if the username and password match the employee username and 
password and their salary is within the junior range, print 'Welcome, junior employee Zarya.'
 In the case where the salary is not within any of the set ranges, simply print 
 'Welcome, employee Zarya.' If the username and password match the CEO credentials 
 but the salary is below the CEO's minimum salary, we have an imposter! For an invalid login, 
 just print 'Invalid login.' (don't worry about whether it was the username or password that didn't match).

If you notice you're repeating a certain condition more than once, try nesting if statements to avoid the repeitition.
*/
if (myUsername === employeeUsername && myPassword === employeePassword) {
    if (salary <= juniorSalaryMaximum && salary >= juniorSalaryMinimum) {
        console.log('Welcome, junior employee Zarya.')
    } else if (salary < juniorSalaryMinimum) {
        console.log('You`re underpaid!')
    } else { console.log('Welcome, employee Zarya.') }
} else if (myPassword === ceoPassword && myUsername === ceoUsername) {
    if (salary >= ceoSalaryMinimum) {
        console.log('Welcome, CEO!')
    } else { console.log('Imposter!') }
} else { console.log('Invalid login!') }
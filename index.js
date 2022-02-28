const inquirer = require('inquirer')


const createEmployee = () => {
     inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'Choose an employee type to create a card for',
            choices: [
                'Manager',
                'Intern', 
                'Salesperson'
            ]
        }
    )
    .then((employeeChoice) => {
        //the empployee choice is an object
       // depending on the Employee Type, we will ask different questions
       if(employeeChoice.employeeType === 'Manager') {
           //ask manager questions
           inquirer.prompt(
            {
                type: 'input',
                name: 'managerName',
                message: 'Please write your name',
            })
            .then((managerInfo) => {
                // make html card
                //example: `<p> Manager Name </p>
                               // <p>Manager office: </p>`
            })

           
       } else if (employeeChoice.employeeType === 'Intern') {
            //ask intern questions
           // make html card
           console.log('intern')
       } else if (employeeChoice.employeeType === 'Salesperson') {
            //ask salesperson questions
           // make html card
           console.log('salesperson')
       }

    })
}

createEmployee();


//collect html for all team members in an array
// this cant be done in this file because Node.js does not connect to the browser
const myTeamHTML = [

    `<p>Team member 1 - Manager</p>`,
    `<p>Team member 2 - Salesperson</p>`,
    `<p>Team member 3 - Intern</p>`

]
// query selector for id 'myTeamHTML'
// add my array of HTML to the index.html page


//export this array of myTeamTHML to another javascript file
//link your html file to that other javascript file


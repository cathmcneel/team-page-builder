const inquirer = require('inquirer')
const fs = require('fs')

teamArray = [
        `<!DOCTYPE html>

        <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Employee Page</title>
        <link rel="stylesheet" href="./dist/style.css" />
        </head>

    <body class="body" >
        <h1> Team Cards </h1>
        <!-- Team cards will go here-->
        <div id='teamHTML'>`,
        // the team cards will be appended here

        //intern HTML - card 1


        
        


            `<!-- Each team card -->
        </div>

    </body>

    </html>`
]

const createEmployee = () => {
     inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: 'Choose an employee type to create a card for',
            choices: [
                'Manager',
                'Intern', 
                'Engineer',
                'Exit'
            ]
        }
    )
    .then((employeeChoice) => {
        //the empployee choice is an object
       // depending on the Employee Type, we will ask different questions
       if(employeeChoice.employeeType === 'Manager') {
           //ask manager questions
           inquirer.prompt(
            [{
                type: 'input',
                name: 'managerName',
                message: 'Please write your name',
            },
            {
                type: 'input',
                name: 'managerID',
                message: 'Please write your employee ID number',
            },
            {
                type: 'input',
                name: 'managerEmail',
                message: 'Please write your email address',
            },
            {
                type: 'input',
                name: 'managerPhone',
                message: 'Please share your office number',
            },
            ])
            .then((managerInfo) => {
                 // make html card
                    const internHTML = 
                    `<h1>Manager</h1>
                    <p>My name is ${managerInfo.managerName} </p>
                    <p>My ID number is ${managerInfo.managerID}</p>
                    <p>My email address is ${managerInfo.managerEmail}</p>
                    <p> My phone number is ${managerInfo.managerPhone}</p>`

                 // insert Intern HTML into team array
                     teamArray.splice(1, 0, internHTML)

                    console.log(teamArray)
                    createEmployee();

            })

           
       } else if (employeeChoice.employeeType === 'Intern') {
            //ask intern questions
            inquirer.prompt(
               [ {
                    type: 'input',
                    name: 'internName',
                    message: 'What is your Intern name?',
                },
                {
                    type: 'input',
                    name: 'internID',
                    message: 'What is your Intern ID number?',
                },
                {
                    type: 'input',
                    name: 'internEmail',
                    message: 'What is your email address?',
                },
                {
                    type: 'input',
                    name: 'internSchool',
                    message: 'What school do you attend?',
                }])
                .then((internInfo) => {
                    // make html card
                  const internHTML = 
                    `<h1>Intern</h1>
                    <p>My name is ${internInfo.internName} </p>
                    <p>My ID number is ${internInfo.internID}</p>
                    <p>My email address is ${internInfo.internEmail}</p>
                    <p>I attend ${internInfo.internSchool}</p>`

                    // insert Intern HTML into team array
                    teamArray.splice(1, 0, internHTML)

                    console.log(teamArray)
                    createEmployee();
             })

       } else if (employeeChoice.employeeType === 'Engineer') {
            //ask intern questions
            inquirer.prompt(
                [ {
                     type: 'input',
                     name: 'engineerName',
                     message: 'What is your Engineer name?',
                 },
                 {
                     type: 'input',
                     name: 'engineerID',
                     message: 'What is your Engineer ID number?',
                 },
                 {
                     type: 'input',
                     name: 'engineerEmail',
                     message: 'What is your email address?',
                 },
                 {
                     type: 'input',
                     name: 'engineerGithub',
                     message: 'What is your Github username?',
                 }])
                 .then((engineerInfo) => {
                     // make html card
                   const internHTML = 
                     `<h1>Engineer</h1>
                     <p>My name is ${engineerInfo.engineerName} </p>
                     <p>My ID number is ${engineerInfo.engineerID}</p>
                     <p>My email address is ${engineerInfo.engineerEmail}</p>
                     <p>I attend ${engineerInfo.engineerGithub}</p>`
 
                     // insert Intern HTML into team array
                     teamArray.splice(1, 0, internHTML)
 
                     console.log(teamArray)
                     createEmployee();
                 })

       } else if (employeeChoice.employeeType === 'Exit') {
           console.log('You have exited the form!')

           // use fs module to write teamArray to html page
               //join together all elements of teamArray
               let finalHTML = teamArray.join()
               finalHTML = finalHTML.replace(/,/g,'');   //replace erroneous commas with nothing
               
               //user doesn't want any more team members
               //write final output to HTML file
               fs.writeFile('MyTeam.html', finalHTML, (error) =>
               error ? console.log('Error!') : console.log(`Output written to file: MyTeam.html`));  //error handling is a required argument
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


var students = [ 
    {name:  'Michael', cohort : 'January'},
    {name : 'John', cohort : 'February'},
    {name : 'Mark', cohort : 'March'},
    {name : 'KB', cohort : 'April'}
]
function students1(arr){
for(var i=0; i<students.length;i++){
console.log("Name:" + students[i].name + "," + "Cohort:" + students[i].cohort);
}
}
students1(students)

var users = {
    'Employees': [ 
        {first_name:  'Michael', last_name : 'Jordan'},
        {first_name : 'John', last_name : 'Rosales'},
        {first_name : 'Mark', last_name : 'Guillen'},
        {first_name : 'KB', last_name : 'Tonel'}
     ],
    'Managers': [
        {first_name : 'Michael', last_name : 'Choi'},
        {first_name : 'Martin', last_name : 'Puryear'}
     ]
    }
function EmployessAndManagers(arr){
for(var user in users){
    console.log(user);
    for(var i=0;i<users[user].length;i++){
        console.log((i+1) +" - "+ users[user][i].first_name + ", " + users[user][i].last_name,users[user][i].first_name.length+users[user][i].last_name.length);
    }
}
}
EmployessAndManagers(users);
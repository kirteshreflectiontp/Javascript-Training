alert('gdg')
var students = [
    {
        SrNo: '1',
        Name: 'KIRTESH',
        MobileNo: '93074107035',
        RollNo: '1',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '2',
        Name: 'AMIT',
        MobileNo: '7720897518',
        RollNo: '2',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '3',
        Name: 'GURU',
        MobileNo: '7083447997',
        RollNo: '3',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '4',
        Name: 'MAYUR',
        MobileNo: '9158567796',
        RollNo: '4',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '5',
        Name: 'VIVEK',
        MobileNo: '79545961723',
        RollNo: '5',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '6',
        Name: 'NITESH',
        MobileNo: '9890082919',
        RollNo: '6',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    },
    {
        SrNo: '7',
        Name: 'PRATHAMESH',
        MobileNo: '7057620300',
        RollNo: '7',
        Semester: '8th',
        Branch: 'Electrical',
        Grade: 'Grade',
    }
]
var info = '';
for (var a = 0; a < students.length; a++) {
    info += '<tr><td>' + students[a].SrNo + '</td><td>' + students[a].Name + '</td><td>' + students[a].MobileNo + '</td><td>' + students[a].RollNo + '</td><td>' + students[a].Semester + '</td><td>' + students[a].Branch + '</td><td>' + students[a].Grade + '</td><tr>';
}
document.getElementById('studentinfo').innerHTML = info;
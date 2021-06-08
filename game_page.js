p1Name = localStorage.getItem("Name1");
p2Name = localStorage.getItem("Name2");

p1score = 0;
p2score = 0;

questionTurn = "p1";
answerTurn = "p2"; 

document.getElementById('player1Name').innerHTML = p1Name;
document.getElementById('player2Name').innerHTML = p2Name;

document.getElementById('player1Score').innerHTML = " = " + p1score;
document.getElementById('player2Score').innerHTML = " = " + p2score;

document.getElementById('player_Question').innerHTML = "Question Turn : " + p1Name
document.getElementById('player_Answer').innerHTML = "Answer Turn : " + p2Name

function send()
{
    number1 = document.getElementById('number1').value;
    number2 = document.getElementById('number2').value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
    input_box = "<br>Answer :   <input type='text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row =   question_number + input_box + check_button ;
    document.getElementById('output').innerHTML = row;
    document.getElementById('number1').value = "";
    document.getElementById('number2').value = "";
}
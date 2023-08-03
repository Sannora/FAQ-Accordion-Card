$(document).ready(function () {
  const questions = $(".question");
  const answers = $(".answer");
  const arrows = $(".arrow-down");
  const box = $("#imageBox");

  questions.click(function () {
    let question = $(this); //Selects the clicked question.
    let answer = question.siblings(".answer"); //Selects clicked question's nearest sibling with class .answer i.e. answer of that question.
    let arrow = question.children(".arrow-down"); //Selects that question's arrow.

    /* Answer Toggle */
    answers.not(answer).hide(500);
    answer.toggle(500);

    /* Arrow Toggle */
    if (arrow.hasClass("rotate-180")) {
      arrows.not(arrow).removeClass("rotate-180");

      arrow.removeClass("rotate-180");
    } else {
      arrows.not(arrow).removeClass("rotate-180");
      arrow.addClass("rotate-180");
    }

    /* Bold Text Toggle */
    questions.not(question).removeClass("text-bold");
    question.toggleClass("text-bold");

    /* Box Movement When Any Question Is Open */
    if (box.hasClass("move-left") && !question.hasClass("text-bold")) {
      box.animate({ right: "25px" });
      box.removeClass("move-left");
    } else if (answer.css("display") == "block") {
      box.addClass("move-left");
    }
  });
});

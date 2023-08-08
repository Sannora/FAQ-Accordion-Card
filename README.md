# FAQ-Accordion-Card
Web challenge that I've completed using HTML, CSS and JQuery to test my JQuery skills that is a basic FAQ accordion card. Here's the link: https://vermillion-cupcake-3b4502.netlify.app

# ~ A Comprehensive Summary of The Works Steps ~

- I've wrapped the FAQ card with a container ``div`` containing two ``sections``: One for the left hand side images and the other for the QnA part.

  > For the woman image on the left to change when switched to mobile view, I've used a ``picture`` tag with two ```sources`` each for desktop and mobile views.

  > I've also wrapped the questions, dropdown arrows(svg) and answers in a container class ``.containerDropdown``.

- I've started CSS styling with global styles and typography. Then I followed mobile-first styling method. I did not use any ``@media`` query to state the mobile view. ``@media`` query was only used to declare a desktop view.

  > For woman image's overflown part to be hidden, I've wrapped it in a ``div`` and set ``overflow: hidden``.

- Scripting was rather short but a little challenging for me since it was the most comprehensive project that I've used JQuery in it.

  > Scripts only consist of one click event listener function. First I declared a variable ``question`` and assigned it to ``$(this)`` so that I can state particular scripts will invoke only on the clicked question. Also I've selected ``question.siblings(".answer")`` and ``question.children(".arrow-down")`` to respectively select that question's answer and arrow.

  > To toggle answers I've used ``toggle()`` function and to prevent more than one answer to be open I've added ``answers.not(answer).hide()`` before the ``toggle()``.
  
  > Making arrows rotate on click and rotate back on close was a little challenging. I've tried several methods like incrementing a rotation variable by 360 degrees on each click but when clicked on another question, that question's arrow would rotate 360*n times and the previous question's arrow wouldn't rotate back. With a little help from stackoverflow community, I've came up with an algorithm that adds and removes a class ``rotate-180``. They are also animated since I've added ``transition: 0.5s`` to class ``.arrow-down``.
  
  > Box on the left hand side in desktop design is moving to left when a question is open and moves back to its original position when all of them are closed. I've added ``position: absolute`` to box image and ``relative`` to its container and when a question is open it adds class ``.move-left`` to the box and when they are closed it removes it and returns it back manually: ``box.animate({ right: "25px" });``.

Here are some screenshots:

Desktop view:

![desktop](https://github.com/Sannora/FAQ-Accordion-Card/assets/74245258/6c30c62e-6506-49d1-b118-4f70c48170ee)

Desktop Active view:

![desktop-active](https://github.com/Sannora/FAQ-Accordion-Card/assets/74245258/d41a5638-8cc2-492b-8d8d-dd446130d443)

Mobile view:

![mobile](https://github.com/Sannora/FAQ-Accordion-Card/assets/74245258/71cbda4d-c546-4278-b9dd-98c37fce0cc7)

Mobile Active view:

![mobile-active](https://github.com/Sannora/FAQ-Accordion-Card/assets/74245258/26f2067b-2b4a-463c-9c60-98b626736ab3)

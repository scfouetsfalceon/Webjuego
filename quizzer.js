
// 1
var questions = [
	[
		"<img src='image/img00.jpg'><br>¿Cómo se llama este símbolo?",
		"Flor Scout",
		"Flor de la Amistad",
		"Flor de Liz",
		"Flor de la Canela",
		2
	],
	[
		"¿Quien fundó el Movimiento Scout?",
		"Ramón Ocando Pérez",
		"Lady Olave Baden-Powell",
		"Robert Baden-Powell",
		"Roland Phillips",
		2
	],
	[
		"¿Cual de estas señales indica peligro/riesgo?",
		"<img src='image/img01.png'>",
		"<img src='image/img02.png'>",
		"<img src='image/img03.png'>",
		"Ninguna de las anteriores",
		1
	],
	[
		"¿Qué artículo de la Ley es 'El Scout canta y sonríe en sus dificultades'?",
		"Cuarto",
		"Noveno",
		"Quinto",
		"Octavo",
		3
	],
	[
		"<img src='image/img11.jpg'><br>¿Qué formación se indica en la figura?",
		"Estrella",
		"Formación en V",
		"Formación en Y",
		"Filas por patrullas",
		0
	],	
	[
		"¿El primer Jamboree Mundial fue el de?",
		"Mafeking en 1913",
		"Olimpia en 1920",
		"Copenhague en 1924",
		"Arrowe Park en 1929",
		1
	],
	[
		"<img src='image/img04.jpg'><br><small>¿Qué hecho trascendente en la Historia del Escultismo se muestra en la imagen?</small>",
		"El Campamento de Brownsea",
		"La Guerra de los Matabeles",
		"El Sitio de Mafeking",
		"La Batalla de Santa Inés",
		2
	],
	[
		"¿Cómo se llamó la 1º Tropa Scout de Venezuela?",
		"San Jorge",
		"Catatumbo",
		"San Sebastián",
		"San Rafael",
		2
	],
	[
		"¿En qué año se llevó a cabo en Campamento de Brownsea?",
		"1857",
		"1907",
		"1913",
		"1941",
		1
	],
	[
		"<img src='image/img05.jpg'><br><small>¿Qué tipo de herida es esta?</small>",
		"Punzada",
		"Contusión",
		"Abrasión",
		"Cortada",
		2
	],
	[
		"¿En qué ciudad se inció el Movimiento Scout en Venezuela?",
		"Maracay",
		"Maracaibo",
		"Caracas",
		"Valencia",
		1
	],
	[
		"<img src='image/img12.jpg'><br>¿Cómo se llama eso que está tocando B-P?",
		"Cuerno de Caribú",
		"Cuerno de Kudú",
		"Cuerno de la Abundancia",
		"Burbusela",
		1
	],
	[
		"¿Cada cuanto se celebra el JOTA-JOTI",
		"Cada 4 años",
		"Cada 3 años",
		"Cada 2 años",
		"Todos los años",
		3
	],
	[
		"<img src='image/semaforo.gif'><br><small>¿Qué dice el mensaje?</small>",
		"Coro",
		"Casa",
		"Hora",
		"Hola",
		3
	],
	[
		"¿Cuales fueron las primeras patrullas del Mundo?",
		"Toros, Chorlitos, Lobos y Cuervos",
		"Zorros, Toros, Lobos y Murciélagos",
		"Chorlitos, Toros, Bulldogs y Cuervos",
		"Caballos, Toros, Lobos y Cuervos",
		0
	],
	[
		"<img src='image/img09.jpg'><br>¿Qué pañoleta es esta?",
		"Comisionado Regional",
		"Jamboree Nacional",
		"Delegación Nacional",
		"Regional de Falcón",
		2
	],
	[
		"¿Cuál fué el primer país de América en tener Asociación Scout?",
		"Estados Unidos",
		"Argentina",
		"Chile",
		"Venezuela",
		2
	],
	[
		"¿Cuál es el nudo para unir cuerdas del mismo grosor?",
		"<img src='image/img06.png'>",
		"<img src='image/img07.png'>",
		"<img src='image/img08.png'>",
		"Ninguno de los anteriores",
		0
	],
	[
		"¿Cuándo fue el Centenario de la Asociación Scout de Venezuela?",
		"2007",
		"2013",
		"2015",
		"Aún no se celebra",
		1
	],
	[
		"<img src='image/img10.jpg'><br>¿Qué constelación se muestra?",
		"Las Pléyades",
		"Pikachú",
		"La Osa Mayor",
		"Orión",
		3
	],
];

// 2
var questionTemplate = _.template(" \
	<div class='card question'><span class='question'><%= question %></span> \
      <ul class='options'> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='0' id='q<%= index %>o1'> \
          <label for='q<%= index %>o1'><%= a %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='1' id='q<%= index %>o2'> \
          <label for='q<%= index %>o2'><%= b %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='2' id='q<%= index %>o3'> \
          <label for='q<%= index %>o3'><%= c %></label> \
        </li> \
        <li> \
          <input type='radio' name='question[<%= index %>]' value='3' id='q<%= index %>o4'> \
          <label for='q<%= index %>o4'><%= d %></label> \
        </li> \
      </ul> \
    </div> \
    ");


// 3
var points,
	pointsPerQuestion,
	currentQuestion,
	questionTimer,
	timeForQuestion = 15, // seconds
	timeLeftForQuestion; 

// 4
$(function() {

	// 
	$('button.start').click(start);
	$('.play_again button').click(restart);


	function restart() {
		points = 0;
		pointsPerQuestion = 10;
		currentQuestion = 0;
		timeLeftForQuestion = timeForQuestion;

		$('.finish.card').hide();
		$('div.start').show();
		$('.times_up').hide();

		generateCards();
		updateTime();
		updatePoints();
	}

	// 
	function start() {
		$('div.start').fadeOut(200, function() {
			moveToNextQuestion();
		});
	}

	// 
	function generateCards() {
		$('.questions').html('');
		for (var i = 0; i < questions.length; i++) {
			var q = questions[i];
			var html = questionTemplate({
				question: q[0],
				index: i,
				a: q[1],
				b: q[2],
				c: q[3],
				d: q[4]
			});
			$('.questions').append(html);
		};
		$('.question.card input').change(optionSelected);
	}

	// 
	function moveToNextQuestion() {
		currentQuestion += 1;
		if (currentQuestion > 1) {
			$('.question.card:nth-child(' + (currentQuestion-1) + ')').hide();
		}
		showQuestionCardAtIndex(currentQuestion);
		setupQuestionTimer();
	}

	// 
	function setupQuestionTimer() {
		if (currentQuestion > 1) {
			clearTimeout(questionTimer);
		}
		timeLeftForQuestion = timeForQuestion;
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// 
	function showQuestionCardAtIndex(index) { // staring at 1
		var $card = $('.question.card:nth-child(' + index + ')').show();
	}

	// 
	function countdownTick() {
		timeLeftForQuestion -= 1;
		updateTime();
		if (timeLeftForQuestion == 0) { 
			return finish();
		}
		questionTimer = setTimeout(countdownTick, 1000);
	}

	// 
	function updateTime() {
		$('.countdown .time_left').html(timeLeftForQuestion + 's');
	}

	// 
	function updatePoints() {
		$('.points span.points').html(points + ' puntos');
	}

	// 
	function optionSelected() {
		var selected = parseInt(this.value);
		var correct = questions[currentQuestion-1][5];

		if (selected == correct) {
			points += pointsPerQuestion;
			updatePoints();
			correctAnimation();
		} else {
			wrongAnimation();
		}

		if (currentQuestion == questions.length) {
			clearTimeout(questionTimer);
			return finish();
		}
		moveToNextQuestion();
	}

	
	function correctAnimation() {
		animatePoints('right');
	}

	// 
	function wrongAnimation() {
		animatePoints('wrong');
	}

	// 
	function animatePoints(cls) {
		$('header .points').addClass('animate ' + cls);
		setTimeout(function() {
			$('header .points').removeClass('animate ' + cls);
		}, 500);
	}

	// 
	function finish() {
		if (timeLeftForQuestion == 0) {
			$('.times_up').show();
		}
		$('p.final_points').html(points + ' puntos');
		$('.question.card:visible').hide();
		$('.finish.card').show();
	}

	// 
	restart();

});
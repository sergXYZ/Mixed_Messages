const usefulActivity = {
    sport: {
        legs: ['barbell squats', 'barbell front squat', 'leg press', 'deadlift', 'romanian deadlift', 'hip thrust', 'bulgarian split squat', 'lunges', 'leg curls', 'leg extensions'],
        pushExer: ['barbell bench press', 'barbell incline bench press', 'dips', 'dumbbell bench press', 'dumbbell incline bench press', 'push-ups', 'fly machine', 'barbell overhead press', 'dumbbell lateral raises'],
        pullExer: ['pull-ups', 'barbell bent-over row', 'seated cable row', 'chin-ups', 'cable pullovers', 'one-arm dumbbel row', 'row machine', 'pull-downs', 't-bar row'],
        additionalExer: ['bicep curls', 'preacher curls', 'hammer curls', 'cable push-downs', 'overhead triceps extensions', 'scull crushers', 'treadmill jogging', 'stairmaster', 'cycling machine', 'jumping rope', 'burpees', 'rowing machine'],
        
    },
    recreational: [
        'go for a walk in the park or forrest',
        'go for a walk near the river or sea',
        'visit a museum',
        'visit an art gallery',
        'visit some musical event',
        'visit some historical site',
        'visit part of your city, where you never been',
        'listen a classical opera or symphony',
        'listen a classic music album',
        'watch a perfomance of folk music from some country around the world',
        'watch a perfomance of folk dancing from some country around the world',
        'watch historical documentary',
        'watch documentary about great composer or artist',
        'watch documentary about great writer or poet',
    ],
    educational: [
        'read an article or watch a video about programming paradigms',
        'read an article or watch a video about programming algorithms',
        'read an article or watch a video about debbuging',
        'read an article or watch a video about networking',
        'read an article or watch a video about data structures',
        'read an article or watch a video about usefull programming tools',
        'read an article or watch a video about control structures',
        'read an article or watch a video about social media marketing',
        'read an article or watch a video about sales and marketing',
        'read an article or watch a video about entrepreneurship',
        'read an article or watch a video about personal finance',
        'read an article or watch a video about business trends',
        'read an article or watch a video about time managment',
        'read an article or watch a video about personal effectiveness',
        'read an article or watch a video about equity investing',
        'read an article or watch a video about finacial news or finacial analysis',
    ],
    message1: function () {
        let exercise1 = this.sport.legs[Math.floor(Math.random() * this.sport.legs.length)];
        let exercise2 = this.sport.pushExer[Math.floor(Math.random() * this.sport.pushExer.
            length)];
        let exercise3 = this.sport.pullExer[Math.floor(Math.random() * this.sport.pullExer.
                length)];
        let exercise4 = this.sport.additionalExer[Math.floor(Math.random() * this.sport.additionalExer.
                    length)];

        console.log(`Your workout exercises for today are: ${exercise1}, ${exercise2}, ${exercise3} and ${exercise4}.`)
    },
    message2: function () {
        let recrIdea = this.recreational[Math.floor(Math.random() * this.recreational.length)];
        console.log(`You can ${recrIdea}.`);
    },
    message3: function () {
        let eduIdea = this.educational[Math.floor(Math.random() * this.educational.length)];
        console.log(`You can ${eduIdea}.`);
    },
    goodLuck: function () {
        console.log('  ggg       ooo       ooo     dddd');
        console.log(' g   g     o   o     o   o    d   d');
        console.log('g         o     o   o     o   d    d');
        console.log('g   gg    o     o   o     o   d    d');
        console.log('g  g  g   o     o   o     o   d    d');
        console.log(' g   g     o   o     o   o    d   d');
        console.log('  ggg       ooo       ooo     dddd');
        console.log('  ');
        console.log('l         u     u     ccc     k   k');
        console.log('l         u     u    c   c    k  k');
        console.log('l         u     u   c         k k  ');
        console.log('l         u     u   c         kk  ');
        console.log('l         u     u   c         k k  ');
        console.log('l     l    u   u     c   c    k  k  ');
        console.log('lllllll     uuu       ccc     k   k');
    },

    mixedMessages: function () {
        this.message1();
        this.message2();
        this.message3();
        this.goodLuck();
    }
    
}

usefulActivity.mixedMessages();



Vue.createApp({
    data(){
        return {
            userLife: 100,
            userHit: 0,
            userSpecialAttack: 0,
            userHeal: 0,
            computerLife: 100,
            computerHit : 0,
            alreadyAttack : false,
            currentRound: 0,
            winner: ''
        };
    },
    methods: {
        attackPlayer(){
            this.userHit = Math.floor(Math.random() * 20);
            this.computerLife -= this.userHit;
            if(this.computerLife < this.userHit){
                this.computerLife = 0;
            }
            this.alreadyAttack = !this.alreadyAttack;
            if(this.currentRound == 2){
                this.currentRound = 0;
                console.log(this.currentRound);
            }
            this.attackAdversaire();
        },
        specialAttackPlayer(){
            this.userSpecialAttack = Math.floor(Math.random() * 50);
            this.computerLife -= this.userSpecialAttack;
            if(this.computerLife < this.userSpecialAttack){
                this.computerLife = 0;
            }
            this.alreadyAttack = !this.alreadyAttack; //true
            this.currentRound = 0;
            console.log(this.currentRound);
            this.attackAdversaire();
        },
        soinPlayer(){
            this.userHeal = Math.floor(Math.random() * 40);
            this.userLife += this.userHeal;
            if(this.userLife > 100){
                this.userLife = 100;
            }
            this.alreadyAttack = !this.alreadyAttack;
            if(this.currentRound == 2){
                this.currentRound = 0;
                console.log(this.currentRound);
            }
            setTimeout(() => {
                this.attackAdversaire();
            }, 1500) 
        },
        attackAdversaire(){
            this.computerHit = Math.floor(Math.random() * 30);
            this.userLife -= this.computerHit;
            if(this.userLife < this.computerHit){
                this.userLife = 0;
            }
            this.alreadyAttack = !this.alreadyAttack;
            if(this.currentRound < 2){
                this.currentRound++;
            } else if(this.currentRound == 2){
                this.currentRound = 0;
            }
            console.log(this.currentRound);
        }
    },
    computed: {
    },
    watch: {
        userLife(value){
            if (value == 0 && this.computerLife == 0){
                this.winner = 'Egalité';
                setTimeout(() => {
                    alert(this.winner);
                }, 1000) 
            }
            else if(value <= 0){
                this.winner = 'Perdu!';
                setTimeout(() => {
                    alert(this.winner);
                }, 1000)
            }
        },
        computerLife(value){
            if (value == 0 && this.userLife == 0){
                this.winner = 'Egalité';
                setTimeout(() => {
                    alert(this.winner);
                }, 1000)
            }
            else if(value <= 0){
                this.winner = 'Victoire!';
                setTimeout(() => {
                    alert(this.winner);
                }, 1000)
            }
        }
    }
}).mount('#monApp');
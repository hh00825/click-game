
<template>
    <div class="inner">
        <section class="section intro-section" v-show="step==1">
            <div class="contents-box">
                <div class="top-text-box">
                    <p class="main-title">제한시간동안 {{buttonName}}를 마구마구 클릭하여 <br/>주어진 숫자를 만들어보세요.</p>
                    <p class="main-title_desc">시간내에 숫자를 초과해도 탈락!</p>
                </div>
                <div class="middle-main-box">
                    <div class="level-item">
                        <span class="number">{{level}}</span><span class="text">단계</span>
                    </div>
                </div>
            </div>
            <div class="button-box">
                <button @click="gameStart($event)" data-setting="init" class="button">게임 시작!</button>
            </div>
        </section>

        <section class="section game-section" v-if="step==2">
            <div class="contents-box">
                <div class="top-text-box">
                    <strong class="current-stage">{{level}} 단계</strong>
                    <p class="main-title">아래 {{buttonName}}를 연타해서 <br/>숫자 {{goalCount}}를 만들어보세요!</p>
                    <p class="main-title_desc">제한 시간 {{duration}}초!!</p>
                </div>
                <div class="middle-main-box">
                    <div class="time-box">
                        <p>남은 시간 <strong class="color-red">{{duration-currentTime}}초</strong></p>
                    </div>
                    <div class="white-box">
                        <div class="count-box">
                            <span>현재까지 누른 횟수</span>
                            <strong>{{count}}</strong>
                        </div>
                        
                        <div class="bubble-box">
                            <p v-if="count == goalCount">숫자를 다 맞췄어요! <br/>제한 시간까지 잠시만 기다려주세요.</p>
                            <p v-else-if="count >= goalCount-10">거의 다왔어요! {{goalCount-count}}개만 더!</p>
                            <p v-else-if="count > goalCount/2">절반 왔어요. 조금만 힘내세요!</p>
                            <p v-else>여기를 클릭하세요. 화이팅!!</p>
                        </div>
                        <button @click="counter()" class="event-button">
                            <img :src="require('../assets/click-target-img01.jpg')" alt="{{buttonName}}">
                        </button>
                    </div>
                </div>
            </div>
        </section>

        <section class="section result-section" v-if="step=='3_success'">
            <div class="contents-box">
                <div class="top-text-box">
                    <strong class="current-stage">{{level-1}} 단계</strong>
                    <p class="main-title">성공!!</p>
                    <div class="result-img">
                        <img :src="require('../assets/success-img.jpg')" alt="성공">
                    </div>
                    <p class="main-title">축하합니다. <br/>다음단계로 넘어갑니다.</p>
                </div>
            </div>
            <div class="button-box">
                <button @click="gameStart($event)" data-setting="success" class="button">다음 단계로!</button>
            </div>
        </section>

        <section class="section result-section" v-if="step=='3_fail'">
            <div class="contents-box">
                <div class="top-text-box">
                    <strong class="current-stage">{{level}} 단계</strong>                    
                    <p class="main-title">실패...</p>
                    <div class="result-img">
                        <img :src="require('../assets/fail-img.jpg')" alt="실패">
                    </div>
                    <p class="main-title" v-if="failReason =='numberOut'">숫자를 초과하였습니다. <br/>다시 도전하세요 ㅠㅠ</p>
                    <p class="main-title" v-else-if="failReason =='timeOut'">시간을 초과하였습니다. <br/>다시 도전하세요 ㅠㅠ</p>       
                </div>
            </div>     
            <div class="button-box">
                <button @click="gameStart($event)" data-setting="fail" class="button">다시 시작!</button>
            </div>
        </section>
    </div>
</template>
<script>
    import '../style.css'

    export default{
        name: "HelloWorld",
        data(){
            return{
                count: 0,
                goalCount: Math.floor(Math.random()*(50 - 25 ) + 25), //25에서 50 사이
                duration: 30,
                currentTime: 0,
                buttonName: "강아지",
                step: 1,
                level: 1,
                failReason: null
            }
        },
        methods: {
            gameStart(event){ //게임 시작 이벤트
                this.step = 2

                let timer = setInterval(() => {
                    this.currentTime++

                    if( this.currentTime === this.duration ){ //시간 도달
                        clearInterval(timer)

                        if(this.count === this.goalCount){ //성공
                            this.step = '3_success'
                            this.level++
                            this.failReason = null

                        }else{ //시간 초과
                            this.step = '3_fail'
                            this.failReason = 'timeOut'
                            
                        }
                    }else if(this.currentTime < this.duration && this.count > this.goalCount){ //제한 시간 전, 숫자 초과
                        clearInterval(timer)

                        this.step = '3_fail'
                        this.failReason = 'numberOut'
                    }
                }, 1000)

                if(event.target.getAttribute("data-setting") !=="init"){
                    this.count = 0
                    this.currentTime = 0
                    this.failReason = null
                    this.goalCount = Math.floor(Math.random()*(50 - 25 ) + 25)
                }
            },            
            counter(){ //게임 내 클릭 버튼 이벤트
                this.count++
            }
        }
    }
</script>

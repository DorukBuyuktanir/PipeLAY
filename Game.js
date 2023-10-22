const StrogeId = "PipeLAY.";
class hareketler{
    constructor(){
        this.sayaçlar=[
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
        ];
        this.max_sayaçlar=[
            [0,3,3,3,3,3,3,3,],
            [3,3,3,3,3,3,3,3,],
            [3,3,3,3,3,3,3,3,],
            [3,3,3,3,3,3,3,0,],
        ];
        this.Boru_Tipleri=[
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
            [0,0,0,0,0,0,0,0,],
        ];
        this.Borular=[[], [], [], []]/*[
            [null,boru_1,boru_2,boru_3,boru_4,boru_5,boru_6,boru_7,],
            [boru_8,boru_9,boru_10,boru_11,boru_12,boru_13,boru_14,boru_15,],
            [boru_16,boru_17,boru_18,boru_19,boru_20,boru_21,boru_22,boru_23,],
            [boru_24,boru_25,boru_26,boru_27,boru_28,boru_29,boru_30,null],
        ];*/
        this.Doğru_Cevap=[
            [0, 2, 0, 0, 1, 2, 0, 0],
            [0, 0, 2, 1, 3, 0, 2, 0],
            [0, 0, 0, 3, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
        /*if(izinler.no8==""){
            this.Doğru_Cevap=[
                [0, 2, 0, 0, 1, 2, 0, 0],
                [0, 0, 2, 1, 3, 0, 2, 0],
                [0, 0, 0, 3, 0, 0, 0, 2],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ]
        }else if(izinler.no8=="1"){
            this.Doğru_Cevap=[
                [0, 0, 2, 1, 0, 0, 0, 2],
                [0, 0, 0, 3, 0, 1, 0, 3],
                [0, 0, 0, 0, 1, 3, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0],
            ]
        }*/
    }

    Kontrolcü(){
            let sayaç=0;
            for(let o=0;o<4;o++){
                for(let d=0;d<8;d++){
                    if(hareketler1.sayaçlar[o][d]==hareketler1.Doğru_Cevap[o][d]){sayaç++;};
                };
            };
            if(sayaç==32){
                window.alert("Tebrikler.Tesisat artık çalışıyor.");
                location.href='./GameMenu.html';
            }else{
                window.alert("Dikkatli bak.");//1,0,2 this.sayaçlar[0]==[0,0,2,1,0,0,0,2]&&this.sayaçlar[1][2]==0&&this.sayaçlar[1][3]==3&&this.sayaçlar[1][5]<2&&this.sayaçlar[1][6]==0&&this.sayaçlar[1][7]==2&&this.sayaçlar[2][4]==0&&this.sayaçlar[2][5]==1&&this.sayaçlar[3][5]==0&&this.sayaçlar[3][6]==0&&this.sayaçlar[3][4]==0
            };
    };

    Oyun_kurucu(){
        function max_sayaçlar_düzenliyici(Tip_Matrisi){
            let Max_Matrisi=[
                [0,3,3,3,3,3,3,3,],
                [3,3,3,3,3,3,3,3,],
                [3,3,3,3,3,3,3,3,],
                [3,3,3,3,3,3,3,0,],
            ];
            for(let i=0;i<4;i++){
                for(let j=0;j<8;j++){
                    if(Tip_Matrisi[i][j]==1||Tip_Matrisi[i][j]==2){
                        Max_Matrisi[i][j]=3;
                    }else if(Tip_Matrisi[i][j]==0){
                        Max_Matrisi[i][j]=1;
                    }else{
                        Max_Matrisi[i][j]=0;
                    }
                }
            }
            return Max_Matrisi;
        };

        //function Boru_Türleri_Belirleyici(İzinler) {
        /*
            0=>Düz Boru
            1=>L Boru
            2=>Üç Yönlü Boru
            3=>Olmayan Boru
            4=>Dört Yönlü Boru
            5=>Giriş Çıkışlar
        
            let a=[[],[],[],[],];
            if(İzinler==0){
                a = [
                    [5,1,3,3,1,1,3,3,],
                    [3,1,1,1,1,1,1,3,],
                    [3,3,1,1,3,3,1,1,],
                    [3,3,3,3,3,3,3,5,],
                ];
            }else if(İzinler==1){
                a = [
                    [5,0,1,1,0,0,0,1,],
                    [3,3,1,1,3,1,0,1,],
                    [3,3,3,3,1,1,3,3,],
                    [3,3,3,3,1,0,0,5,],
                ];
            }else {
                a = [
                    [],
                    [],
                    [],
                    [],
                ];
            }
        return a;
        };

        function Doğru_Cevap_Bulucu(İzinler){
            if()
        }*/

        function Boru_dizici(Boru_Türleri,Boru,sayaç){
            for(let k=0;k<4;k++){
                for(let l=0;l<8;l++){
                    if(Boru[k][l]!=null){
                        if(Boru_Türleri[k][l]==3){
                            Boru[k][l].src="GameImages/olamayan_boru.png";
                        }else if(Boru_Türleri[k][l]==4){
                            Boru[k][l].src="GameImages/dört_yönlü_boru.png";
                        }else if(Boru_Türleri[k][l]==0){
                            sayaç[k][l]=window.Math.floor(Math.random()*2);
                            if(sayaç[k][l]==0){Boru[k][l].src="GameImages/düz_boru.png";};
                            if(sayaç[k][l]==1){Boru[k][l].src="GameImages/dikey_düz_boru.png";};
                        }else if(Boru_Türleri[k][l]==1){
                            sayaç[k][l]=window.Math.floor(Math.random()*4);
                            if(sayaç[k][l]==0){Boru[k][l].src="GameImages/L_boru.png";};
                            if(sayaç[k][l]==1){Boru[k][l].src="GameImages/aşağı_bakan_L_boru.png";};
                            if(sayaç[k][l]==2){Boru[k][l].src="GameImages/aşağı_bakan_ters_L_boru.png";};
                            if(sayaç[k][l]==3){Boru[k][l].src="GameImages/ters_L_boru.png";};
                        }else if(Boru_Türleri[k][l]==2){
                            sayaç[k][l]=window.Math.floor(Math.random()*4);
                            if(sayaç[k][l]==0){Boru[k][l].src="GameImages/üç_yönlü_aşağı_bakan_boru.png";};
                            if(sayaç[k][l]==1){Boru[k][l].src="GameImages/üç_yönlü_sağa_bakan_boru.png";};
                            if(sayaç[k][l]==2){Boru[k][l].src="GameImages/üç_yönlü_yukarı_bakan_boru.png";};
                            if(sayaç[k][l]==3){Boru[k][l].src="GameImages/üç_yönlü_sola_bakan_boru.png";};
                        }
                    };
                };
            }; 
        };

        function BoruOluşturucu(){
            let borular =[[], [], [], []]
            for (let i = 0; i < 4; i++) {
                let div = document.createElement("div");
                document.body.appendChild(div);
                for (let j = 0; j < 8; j++) {
                    let img = document.createElement("img");
                    div.appendChild(img);
                    if(i+j == 0){
                        img.src = "GameImages/Giriş.png";
                        borular[i].push(null);
                    }else if(i+j == 10){
                        img.src = "GameImages/son_boru.png";
                        borular[i].push(null);
                    }else{
                        borular[i].push(img);
                    }
                }   
            }
            return borular;
        }


        this.Borular = BoruOluşturucu();
        console.log(this.Borular);
        this.MainData = JSON.parse(localStorage.getItem(StrogeId+"Levels"))[localStorage.getItem(StrogeId+"ActiveLevel")]
        this.Boru_Tipleri = this.MainData["PipePlace"];
        this.Doğru_Cevap = this.MainData["Answer"];
        console.log(this.Boru_Tipleri);
        this.max_sayaçlar = max_sayaçlar_düzenliyici(this.Boru_Tipleri);
        console.log(this.max_sayaçlar);
        Boru_dizici(this.Boru_Tipleri,this.Borular,this.sayaçlar);
     };

    Boru_hareketleri(dize_x,dize_y){
        /*
        0=>Düz Boru
        1=>L Boru
        2=>Üç Yönlü Boru
        3=>Olmayan Boru
        4=>Dört Yönlü Boru
        5=>Giriş Çıkışlar
        */
        this.dize_x=Number(dize_x)-1;
        this.dize_y=Number(dize_y)-1;
        let tür=this.Boru_Tipleri[this.dize_y][this.dize_x];
        let nesne=this.Borular[this.dize_y][this.dize_x]
        if(tür==0){
            this.sayaçlar[this.dize_y][this.dize_x]++;
            this.sayaçlar[this.dize_y][this.dize_x]=this.sayaçlar[this.dize_y][this.dize_x]%2;
            if(this.sayaçlar[this.dize_y][this.dize_x]!=0){
                nesne.src="GameImages/dikey_düz_boru.png";
            }else{
                nesne.src="GameImages/düz_boru.png";
            }
            console.log(this.sayaçlar)
            return 0;
        }else if(tür==1){
            this.sayaçlar[this.dize_y][this.dize_x]++;
            this.sayaçlar[this.dize_y][this.dize_x]=this.sayaçlar[this.dize_y][this.dize_x]%4;
            if(this.sayaçlar[this.dize_y][this.dize_x]==0){
                nesne.src="GameImages/L_boru.png";
            }else if(this.sayaçlar[this.dize_y][this.dize_x]==1){
                nesne.src="GameImages/aşağı_bakan_L_boru.png";
            }else if(this.sayaçlar[this.dize_y][this.dize_x]==2){
                nesne.src="GameImages/aşağı_bakan_ters_L_boru.png";
            }else{
                nesne.src="GameImages/ters_L_boru.png";
            }
            console.log(this.sayaçlar)
            return 0;
        }else if(tür==2){
            this.sayaçlar[this.dize_y][this.dize_x]++;
            this.sayaçlar[this.dize_y][this.dize_x]=this.sayaçlar[this.dize_y][this.dize_x]%4;
            if(this.sayaçlar[this.dize_y][this.dize_x]==0){
                nesne.src="GameImages/üç_yönlü_aşağı_bakan_boru.png";
            }else if(this.sayaçlar[this.dize_y][this.dize_x]==1){
                nesne.src="GameImages/üç_yönlü_sağa_bakan_boru.png";
            }else if(this.sayaçlar[this.dize_y][this.dize_x]==2){
                nesne.src="GameImages/üç_yönlü_yukarı_bakan_boru.png";
            }else{
                nesne.src="GameImages/üç_yönlü_sola_bakan_boru.png";
            }
            console.log(this.sayaçlar)
            return 0;
        }
    }
}
function TıklamaAyarı(borular, hareketle){
    for (let i = 0; i < 4; i++) {
        for (let j = 0; j < 8; j++) {
            if(borular[i][j] !=null)
                borular[i][j].onclick = function(){hareketle.Boru_hareketleri(j+1, i+1);};
        }
    }
}


let hareketler1 = new hareketler();
hareketler1.Oyun_kurucu();
TıklamaAyarı(hareketler1.Borular, hareketler1);
/*boru_1.onclick=function(){hareketler1.Boru_hareketleri(2,1);};
boru_2.onclick=function(){hareketler1.Boru_hareketleri(3,1);};
boru_3.onclick=function(){hareketler1.Boru_hareketleri(4,1);};
boru_4.onclick=function(){hareketler1.Boru_hareketleri(5,1);};
boru_5.onclick=function(){hareketler1.Boru_hareketleri(6,1);};
boru_6.onclick=function(){hareketler1.Boru_hareketleri(7,1);};
boru_7.onclick=function(){hareketler1.Boru_hareketleri(8,1);};
boru_8.onclick=function(){hareketler1.Boru_hareketleri(1,2);};
boru_9.onclick=function(){hareketler1.Boru_hareketleri(2,2);};
boru_10.onclick=function(){hareketler1.Boru_hareketleri(3,2);};
boru_11.onclick=function(){hareketler1.Boru_hareketleri(4,2);};
boru_12.onclick=function(){hareketler1.Boru_hareketleri(5,2);};
boru_13.onclick=function(){hareketler1.Boru_hareketleri(6,2);};
boru_14.onclick=function(){hareketler1.Boru_hareketleri(7,2);};
boru_15.onclick=function(){hareketler1.Boru_hareketleri(8,2);};
boru_16.onclick=function(){hareketler1.Boru_hareketleri(1,3);};
boru_17.onclick=function(){hareketler1.Boru_hareketleri(2,3);};
boru_18.onclick=function(){hareketler1.Boru_hareketleri(3,3);};
boru_19.onclick=function(){hareketler1.Boru_hareketleri(4,3);};
boru_20.onclick=function(){hareketler1.Boru_hareketleri(5,3);};
boru_21.onclick=function(){hareketler1.Boru_hareketleri(6,3);};
boru_22.onclick=function(){hareketler1.Boru_hareketleri(7,3);};
boru_23.onclick=function(){hareketler1.Boru_hareketleri(8,3);};
boru_24.onclick=function(){hareketler1.Boru_hareketleri(1,4);};
boru_25.onclick=function(){hareketler1.Boru_hareketleri(2,4);};
boru_26.onclick=function(){hareketler1.Boru_hareketleri(3,4);};
boru_27.onclick=function(){hareketler1.Boru_hareketleri(4,4);};
boru_28.onclick=function(){hareketler1.Boru_hareketleri(5,4);};
boru_29.onclick=function(){hareketler1.Boru_hareketleri(6,4);};
boru_30.onclick=function(){hareketler1.Boru_hareketleri(7,4);};*/
window.onkeydown=function(olay){
    if(olay.keyCode==89){
        window.location.reload()
    }else if(olay.keyCode==81){
        location.href='./GameMenu.html'
    }
}
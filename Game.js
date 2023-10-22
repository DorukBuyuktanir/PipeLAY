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
        this.Borular=[[], [], [], []]
        this.Doğru_Cevap=[
            [0, 2, 0, 0, 1, 2, 0, 0],
            [0, 0, 2, 1, 3, 0, 2, 0],
            [0, 0, 0, 3, 0, 0, 0, 2],
            [0, 0, 0, 0, 0, 0, 0, 0],
        ];
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
                window.alert("Dikkatli bak.");
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

        /*
            0=>Düz Boru
            1=>L Boru
            2=>Üç Yönlü Boru
            3=>Olmayan Boru
            4=>Dört Yönlü Boru
            5=>Giriş Çıkışlar}*/

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
window.onkeydown=function(olay){
    if(olay.keyCode==89){
        window.location.reload()
    }else if(olay.keyCode==81){
        location.href='./GameMenu.html'
    }
}
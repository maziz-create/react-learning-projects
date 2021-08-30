import React from 'react'
import { useState, useContext } from 'react';
import WeatherApiAddressContext from '../../context/WeatherApiAddressContext';
import WeatherDetail from '../WeatherDetail';

/*
    -burası alt componentine yani weatherdetail componentine şehri ve api keyli fonksiyonu göndercek
    -alt componenti => weatherdetail
    -api keyli fonksiyon nereden gelecek => weatherApiAddressContext
    -alt componente ne göndereceğiz => api keyli fonksiyonu ve şehri.
    -alt component ne yapacak => axios ile api keyli fonk ' a şehri ekleyip istekte bulunacak.
    sonra stillendirerek gösterecek işte.
*/

/*
    BURAYA CONTEXTTEN APİ ADRESLİ FONKSİYONU ÇEKECEĞİZ. ONA BURADA İŞLEM YAPMAYIP GÖNDERECEĞİZ ALTA
*/

function WeatherCity() {

    const setApiAddress = useContext(WeatherApiAddressContext);

    const [city, setCity] = useState("");

    const handleChange = (e) => {
        setCity(e.target.value);
    }

    // console.log(setApiAddress);

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col p-0">
                        <div className="selectdiv">
                            <select className="form-select mb-3 dropdown" aria-label="Default select example" value={city} onChange={handleChange}>
                                <option className="placeholder" value="">Please select a city</option>
                                <option value="adana">Adana</option>
                                <option value="adıyaman">Adıyaman</option>
                                <option value="afyonkarahisar">Afyonkarahisar</option>
                                <option value="ağrı">Ağrı</option>
                                <option value="amasya">Amasya</option>
                                <option value="ankara">Ankara</option>
                                <option value="antalya">Antalya</option>
                                <option value="artvin">Artvin</option>
                                <option value="aydın">Aydın</option>
                                <option value="balıkesir">Balıkesir</option>
                                <option value="bilecik">Bilecik</option>
                                <option value="bingöl">Bingöl</option>
                                <option value="bitlis">Bitlis</option>
                                <option value="bolu">Bolu</option>
                                <option value="burdur">Burdur</option>
                                <option value="bursa">Bursa</option>
                                <option value="çanakkale">Çanakkale</option>
                                <option value="çankırı">Çankırı</option>
                                <option value="çorum">Çorum</option>
                                <option value="denizli">Denizli</option>
                                <option value="diyarbakır">Diyarbakır</option>
                                <option value="edirne">Edirne</option>
                                <option value="elazığ">Elazığ</option>
                                <option value="erzincan">Erzincan</option>
                                <option value="erzurum">Erzurum</option>
                                <option value="eskişehir">Eskişehir</option>
                                <option value="gaziantep">Gaziantep</option>
                                <option value="giresun">Giresun</option>
                                <option value="gümüşhane">Gümüşhane</option>
                                <option value="hakkari">Hakkâri</option>
                                <option value="hatay">Hatay</option>
                                <option value="ısparta">Isparta</option>
                                <option value="mersin">Mersin</option>
                                <option value="istanbul">İstanbul</option>
                                <option value="izmir">İzmir</option>
                                <option value="kars">Kars</option>
                                <option value="kastamonu">Kastamonu</option>
                                <option value="kayseri">Kayseri</option>
                                <option value="kırklareli">Kırklareli</option>
                                <option value="kırsehir">Kırşehir</option>
                                <option value="kocaeli">Kocaeli</option>
                                <option value="konya">Konya</option>
                                <option value="kütahya">Kütahya</option>
                                <option value="malatya">Malatya</option>
                                <option value="manisa">Manisa</option>
                                <option value="kahramanmaraş">Kahramanmaraş</option>
                                <option value="mardin">Mardin</option>
                                <option value="muğla">Muğla</option>
                                <option value="muş">Muş</option>
                                <option value="nevşehir">Nevşehir</option>
                                <option value="niğde">Niğde</option>
                                <option value="ordu">Ordu</option>
                                <option value="rize">Rize</option>
                                <option value="sakarya">Sakarya</option>
                                <option value="samsun">Samsun</option>
                                <option value="siirt">Siirt</option>
                                <option value="sinop">Sinop</option>
                                <option value="sivas">Sivas</option>
                                <option value="tekirdağ">Tekirdağ</option>
                                <option value="tokat">Tokat</option>
                                <option value="trabzon">Trabzon</option>
                                <option value="tunceli">Tunceli</option>
                                <option value="şanlıurfa">Şanlıurfa</option>
                                <option value="usak">Uşak</option>
                                <option value="van">Van</option>
                                <option value="yozgat">Yozgat</option>
                                <option value="zonguldak">Zonguldak</option>
                                <option value="aksaray">Aksaray</option>
                                <option value="bayburt">Bayburt</option>
                                <option value="karaman">Karaman</option>
                                <option value="kırıkkale">Kırıkkale</option>
                                <option value="batman">Batman</option>
                                <option value="şırnak">Şırnak</option>
                                <option value="bartın">Bartın</option>
                                <option value="ardahan">Ardahan</option>
                                <option value="ığdır">Iğdır</option>
                                <option value="yalova">Yalova</option>
                                <option value="karabük">Karabük</option>
                                <option value="kilis">Kilis</option>
                                <option value="osmaniye">Osmaniye</option>
                                <option value="düzce">Düzce</option>
                            </select>
                        </div>

                    </div>

                    <div className="col">
                        <div className="p-5">
                            {
                                city !== "" &&
                                <WeatherDetail setApiAddress={setApiAddress} city={city} />
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WeatherCity

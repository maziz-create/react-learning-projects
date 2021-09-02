import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import Todo from './index';

//NOT: yeni öğrendiğim unit testingi uyguluyorum.

describe('Todo testleri', () => {
    let input, addButton, buttonV, buttonO, buttonX;

    beforeEach(() => {
        render(<Todo />);
        input = screen.getByPlaceholderText('Add To Do');
        addButton = screen.getByText('Ekle');
        buttonV = screen.getAllByText('V')[0]; //todo tamamlandı
        buttonO = screen.getAllByText('O')[0]; //tamamlamayı kaldır
        buttonX = screen.getAllByText('X')[0]; //todoyu sil
    })

    test('İnput ve buttonlar render edilmeli', () => {
        // expect(input).toHaveValue('initial');
        // expect(buttonV.length).toEqual(3);
        // expect(buttonO.length).toEqual(3);
        // expect(buttonX.length).toEqual(3);
        // YUKARIDAKİLER YANLIŞ KOD! DÖKÜMANDA VARLAR MI YOKLAR MI ONU KONTROL EDİYORUZ!

        //toBeInTheDocument => dökümanda mevcut mu ? true ise testi geçer.
        expect(input).toBeInTheDocument();
        expect(buttonV).toBeInTheDocument();
        expect(buttonO).toBeInTheDocument();
        expect(buttonX).toBeInTheDocument();
    });


    test('Varsayılan olarak verilen 3 todo render edilmeli', () => {
        const todos = screen.getAllByText(/Todo/i); // To do ile başlayanları al
        expect(todos.length).toEqual(3); //todo sayısı 3 olmalı
    });

    test('Inputa string girilip butona basılınca listeye eklenmeli', () => {
        /*
        bunu yaptırma yöntemi şöyle:
            -önce inputa yazacağımız şeyi tanımla
            -sonra inputa bunu yaz
            -sonra butona tıkla
            -sonra kontrol et listeye girmiş mi
            -girdiyse testi geç.
        */

        //inputu doldur
        const name = "Mehmet";
        userEvent.type(input, name); //bir şeye bir şey yazdıracağımız zaman...

        //butona tıkla
        userEvent.click(addButton)
        
        //assertion(doğrulama)
        expect(screen.getByText(name)).toBeInTheDocument();
    });
});


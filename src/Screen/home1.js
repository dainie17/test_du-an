import React, { useEffect } from "react";
import '../css/testHome.css'


const movies = [
    {
        image: 'https://chaipetsaigon.com/wp-content/uploads/2020/11/330ml-tam-giac.jpg',
        title: 'Tổng hợp #10 mẫu chai nhựa đẹp cho cửa hàng đồ uống',
        synopsis: "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    },
    {
        image: 'https://www.nhuathangphat.com/uploads/images/9998bb5a0021f97fa030(1).jpg',
        title: 'Godzilla: King of the Monsters',
        synopsis: "Members of the crypto-zoological agency Monarch face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species-thought to be mere myths-rise again, they all vie for supremacy, leaving humanity's very existence hanging in the balance.",
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcAIUJc1K7C_RxtwZbqQbob9ncGIScyXMBNGj8bat5ATxnm-yS81So9_wwvb79fyj73_o&usqp=CAU',
        title: 'Abominable',
        synopsis: 'After discovering a Yeti on the roof of her apartment building, teenage Yi and her two friends embark on an epic quest to reunite the magical creature with his family. But to do so, they must stay one step ahead of a wealthy financier and a determined zoologist who want to capture the beast for their own gain.',
    },
    {
        image: 'https://chailomyphamhanoi.files.wordpress.com/2018/06/chai-le1bb8d-nhe1bbb1a-gic3a1-re1babb.jpg',
        title: 'Scary Movie',
        synopsis: 'Defying the very notion of good taste, Scary Movie out-parodies the pop culture parodies with a no-holds barred assault on the most popular images and talked-about moments from recent films, television and commercials. The film boldly fires barbs at the classic scenes from "Scream," "The Sixth Sense," "The Matrix," "I Know What You Did Last Summer" and "The Blair Witch Project," then goes on to mock a whole myriad of teen movie clichés, no matter the genre.',
    },
    {
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsO8ThMPREGI8KZbNi4fzl86sYzoZs9ZjbfA&usqp=CAU',
        title: 'Avengers: Endgame',
        synopsis: 'Adrift in space with no food or water, Tony Stark sends a message to Pepper Potts as his oxygen supply starts to dwindle. Meanwhile, the remaining Avengers -- Thor, Black Widow, Captain America and Bruce Banner -- must figure out a way to bring back their vanquished allies for an epic showdown with Thanos -- the evil demigod who decimated the planet and the universe.',
    },
    {
        image: 'https://imgcdn.thitruongsi.com/tts/rs:fill:320:320:1:1/g:sm/plain/file://product/2019/12/10/f9cf6da0-1b17-11ea-a478-a9c16a6310c5.jpg',
        title: 'The Matrix',
        synopsis: 'Neo (Keanu Reeves) believes that Morpheus (Laurence Fishburne), an elusive figure considered to be the most dangerous man alive, can answer his question -- What is the Matrix? Neo is contacted by Trinity (Carrie-Anne Moss), a beautiful stranger who leads him into an underworld where he meets Morpheus. They fight a brutal battle for their lives against a cadre of viciously intelligent secret agents. It is a truth that could cost Neo something more precious than his life.',
    },
    {
        image: 'https://cf.shopee.vn/file/3aef38263c7a965337233b0f01065e9f',
        title: 'Pulp Fiction',
        synopsis: 'Vincent Vega (John Travolta) and Jules Winnfield (Samuel L. Jackson) are hitmen with a penchant for philosophical discussions. In this ultra-hip, multi-strand crime movie, their storyline is interwoven with those of their boss, gangster Marsellus Wallace (Ving Rhames) ; his actress wife, Mia (Uma Thurman) ; struggling boxer Butch Coolidge (Bruce Willis) ; master fixer Winston Wolfe (Harvey Keitel) and a nervous pair of armed robbers, "Pumpkin" (Tim Roth) and "Honey Bunny" (Amanda Plummer).',
    },
    {
        image: 'https://chainhuadepgiasiblog.files.wordpress.com/2017/05/chainhuapetgiasi.jpg?w=633&h=633',
        title: 'Star Wars: The Rise of Skywalker',
        synopsis: "When it's discovered that the evil Emperor Palpatine did not die at the hands of Darth Vader, the rebels must race against the clock to find out his whereabouts. Finn and Poe lead the Resistance to put a stop to the First Order's plans to form a new Empire, while Rey anticipates her inevitable confrontation with Kylo Ren. Warning: Some flashing-lights scenes in this film may affect photosensitive viewers.",
    },
    {
        image: 'https://nhuahoangminh.vn/wp-content/uploads/2017/05/chai-nh%E1%BB%B1a-330ml.jpg',
        title: 'Kill Bill',
        synopsis: 'A former assassin, known simply as The Bride (Uma Thurman), wakes from a coma four years after her jealous ex-lover Bill (David Carradine) attempts to murder her on her wedding day. Fueled by an insatiable desire for revenge, she vows to get even with every person who contributed to the loss of her unborn child, her entire wedding party, and four years of her life. After devising a hit list, The Bride sets off on her quest, enduring unspeakable injury and unscrupulous enemies.',
    },
    
];
const $ = (selector) => {
    return document.querySelector(selector);
};
const isSliderItem = (obj) => {
    var _a;
    return ((_a = obj) === null || _a === void 0 ? void 0 : _a.constructor) === SliderItem;
};
const isArrayOfSliderItems = (obj) => {
    return Array.isArray(obj) && obj.every(isSliderItem);
};
class SliderItem extends HTMLLIElement {
    constructor() {
        super();
        this.position = Number(this.getAttribute('idx'));
        this.movie = {
            title: this.getAttribute('title'),
            image: this.getAttribute('image'),
            synopsis: this.getAttribute('synopsis'),
        };
        this.className = 'slider__item';
    }
    connectedCallback() {
        this.appendImage();
        this.setStyles();
    }
    appendImage() {
        const img = Object.assign(document.createElement('img'), {
            src: this.movie.image,
        });
        this.appendChild(img);
    }
    // prettier-ignore
    setStyles() {
        this.style.transform = `translateX(${this.position === 0 ? 35 : 35 + 16 * this.position}rem)`;
        this.style.display = this.position === movies.length - 1 ? 'none' : 'initial';
        if (this.position === 0) {
            this.classList.add('active');
            renderMovieDetails(this.movie);
        }
        if (this.position !== 0 && this.classList.contains('active')) {
            this.classList.remove('active');
        }
    }
    setNextPosition() {
        this.position = (this.position + movies.length - 1) % movies.length;
    }
    rotatePosition() {
        this.setNextPosition();
        this.setStyles();
    }
}
const renderMovieDetails = (movie) => {

    $('.text').innerHTML = `
        <div class="text__inner">
            <div class="text__group">
                <h3 class="text__title">${movie.title}</h3>
                
                <p class="text__synopsis">${movie.synopsis}</p>
            </div>
        </div>
    `;
};
class SliderList extends HTMLUListElement {
    constructor() {
        super();
        this.innerHTML = movies.map(this.liHTML).join('');
    }
    liHTML(m, idx) {
        return `<li 
                    is="slider-item" 
                    image="${m.image}" 
                    title="${m.title}" 
                    synopsis="${m.synopsis}" 
                    idx="${idx}">
                </li>
            `;
    }
}
const components = [
    {
        tagName: 'slider-list',
        component: SliderList,
        extends: { extends: 'ul' },
    },
    {
        tagName: 'slider-item',
        component: SliderItem,
        extends: { extends: 'li' },
    },
];
components.forEach((c) => {
    window.customElements.define(c.tagName, c.component, c.extends);
});



function SliderHome() {
    useEffect(()=>{
    
        $('.btn').addEventListener('click', () => {
            const items = Array.from(document.querySelectorAll('.slider__item'));
            if (isArrayOfSliderItems(items)) {
                items.forEach((itemt) => itemt.rotatePosition());
            }
        });
    })


  return (
    <div className="app__inner">
        <div className="slider">
            <ul is="slider-list" className="slider__list"></ul>
        </div>
        <div className="btn">
            &#8594;
        </div>
        <div className="text"></div>
    </div>
  )
}

export default SliderHome;
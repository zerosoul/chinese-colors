import { useState, useReducer, useEffect } from 'react';
import pinyin from 'pinyin';
const jinrishici = require('jinrishici');

import convert from 'color-convert';
import colors from './assets/colors.json';

const useMobile = (width = 750) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= width);

  console.log('mmmmmm');
  useEffect(() => {
    const checkMobile = () => {
      console.log('rrrr');

      if (window.innerWidth <= width) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener('resize', checkMobile);
    return () => {
      window.removeEventListener('resize', checkMobile, true);
    };
  }, [width]);
  return { isMobile };
};

const usePreview = () => {
  const [preview, setPreview] = useState(false);
  const closePreview = () => {
    setPreview(false);
  };
  const showPreview = () => {
    setPreview(true);
  };
  return { preview, closePreview, showPreview };
};

const useModal = () => {
  const [visible, setVisible] = useState(false);
  const closeModal = () => {
    setVisible(false);
  };
  const showModal = () => {
    setVisible(true);
  };
  return { visible, closeModal, showModal };
};

colors.push({
  name: '',
  colors: JSON.parse(localStorage.getItem('FAV_COLORS') || '[]')
});

const Colors = colors.map(set => {
  set.RGB = convert.hex.rgb(set.hex);
  set.colors = set.colors.map(c => {
    let heteronymIdx = c.name.indexOf('藏') > -1 ? 1 : 0;
    return {
      ...c,
      RGB: convert.hex.rgb(c.hex),
      CMYK: convert.hex.cmyk(c.hex),
      pinyin: pinyin(c.name, {
        heteronym: true, // 启用多音字模式
        segment: true // 启用分词，以解决多音字问题。
      })
        .map(item => {
          return item.length > 1 ? item[heteronymIdx] : item;
        })
        .join(' ')
    };
  });
  return set;
});
console.log('all', Colors);

const usePoetry = dep => {
  const [poetry, setPoetry] = useState(null);
  const fetchPoetry = () => {
    jinrishici.load(
      result => {
        let obj = {
          content: result.data.content,
          author: result.data.origin.author,
          title: result.data.origin.title
        };
        setPoetry(obj);
        localStorage.setItem('POETRY', JSON.stringify(obj));
      },
      err => {
        setPoetry(null);
        localStorage.setItem('POETRY', null);
        console.log('err', err);
      }
    );
  };
  useEffect(() => {
    fetchPoetry();
  }, [dep]);
  return { poetry, fetchPoetry };
};

const useShareColor = (id = null) => {
  let tmpSet = null;
  let tmpColor = null;
  if (id) {
    let [setId] = id.split('-');
    tmpSet = Colors.find(set => set.id == setId);
    tmpColor = tmpSet.colors.find(c => c.id == id);
    // 滑动到顶部
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  console.log('tmp color', tmpSet, tmpColor);

  return { set: tmpSet, color: tmpColor };
};
const useColor = () => {
  const SelectedColorSet = JSON.parse(localStorage.getItem('SELECTED_COLOR_SET')) || Colors[0];
  const SelectedColor =
    JSON.parse(localStorage.getItem('SELECTED_COLOR')) || SelectedColorSet.colors[9];
  const initialValue = {
    sets: Colors.map(set => {
      const newSet = { ...set };
      // delete newSet.colors;
      return newSet;
    }),
    currColor: SelectedColor,
    currSet: SelectedColorSet
  };
  const execSideEffect = obj => {
    console.log('dddd', obj);
    document.body.style.backgroundColor = obj.hex;
    localStorage.setItem('SELECTED_COLOR', JSON.stringify(obj));
    let arr = document.title.split(' - ');
    document.title = arr.length > 1 ? `${obj.name} - ${arr[1]}` : `${obj.name} - ${arr[0]}`;
    let metaThemeColor = document.querySelector('meta[name=theme-color]');
    metaThemeColor.setAttribute('content', obj.hex);
    // 滑动到顶部
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };
  const reducer = (state, action) => {
    const { type, payload } = action;
    const { currSet, sets } = state;
    switch (type) {
      case 'UPDATE_COLOR': {
        let c = currSet.colors.find(c => c.name === payload.name);
        execSideEffect(c);
        return { ...state, currColor: c };
      }
      case 'UPDATE_COLOR_SET': {
        let cs = sets.find(cs => cs.name === payload.name);
        localStorage.setItem('SELECTED_COLOR_SET', JSON.stringify(cs));
        if (payload.name == '') {
          cs.colors = JSON.parse(localStorage.getItem('FAV_COLORS') || '[]');
        }
        execSideEffect(cs.colors[0]);
        return { ...state, currSet: cs, currColor: cs.colors[0] };
      }
      default:
        throw new Error();
    }
  };
  const { currColor } = initialValue;
  execSideEffect(currColor);
  const [state, dispatch] = useReducer(reducer, initialValue);
  const updateCurrColor = name => {
    dispatch({ type: 'UPDATE_COLOR', payload: { name } });
  };
  const updateCurrSet = name => {
    dispatch({ type: 'UPDATE_COLOR_SET', payload: { name } });
  };
  console.log('useReducer store', state);

  return { ...state, updateCurrColor, updateCurrSet };
};

export { useModal, usePreview, useShareColor, useColor, useMobile, usePoetry };
export default useColor;

import { useState, useReducer, useEffect } from 'react';

const useMobile = (width = 411) => {
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

const useColor = initialValue => {
  const reducer = (state, action) => {
    const { type, payload } = action;
    const { currSet, sets } = state;
    switch (type) {
      case 'UPDATE_COLOR': {
        let c = currSet.colors.find(c => c.name === payload.name);
        localStorage.setItem('SELECTED_COLOR', JSON.stringify(c));

        return { ...state, currColor: c };
      }
      case 'UPDATE_COLOR_SET': {
        let cs = sets.find(cs => cs.name === payload.name);
        localStorage.setItem('SELECTED_COLOR_SET', JSON.stringify(cs));
        if (payload.name == '') {
          cs.colors = JSON.parse(localStorage.getItem('FAV_COLORS') || '[]');
        }
        return { ...state, currSet: cs };
      }
      default:
        throw new Error();
    }
  };

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

export { useModal, usePreview, useColor, useMobile };
export default useColor;

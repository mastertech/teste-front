import React, { createContext } from 'react';

import PropTypes from 'prop-types';

const AppContext = createContext();

const AppProvider = ({ children }) => {
  

  //Context -------------------------------------------------------------
  const context = {

  };

  return <AppContext.Provider value={context}>{children}</AppContext.Provider>;
};

AppProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AppContext, AppProvider };
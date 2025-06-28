import React, { useState } from 'react';

const CollapsibleContent = ({ children, isCollapsed }) => {

  return (
    <div className={`collapsible-content ${isCollapsed ? 'collapsed' : ''}`}>
      {children}
    </div>
  );
};

export default CollapsibleContent;
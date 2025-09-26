"use client"

import React, { useState, createContext, useContext } from 'react'

const TabsContext = createContext()

const Tabs = ({ defaultValue, children, className = "" }) => {
  const [activeTab, setActiveTab] = useState(defaultValue)

  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      <div className={`w-full ${className}`}>
        {children}
      </div>
    </TabsContext.Provider>
  )
}

const TabsList = ({ children }) => {
  return (
    <div className="flex border-b border-gray-200 mb-4">
      {children}
    </div>
  )
}

const TabsTrigger = ({ value, children }) => {
  const { activeTab, setActiveTab } = useContext(TabsContext)
  const isActive = activeTab === value
  
  return (
    <button
      onClick={() => setActiveTab(value)}
      className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
        isActive
          ? 'border-black text-black'
          : 'border-transparent text-gray-500 hover:text-black hover:border-gray-300'
      }`}
    >
      {children}
    </button>
  )
}

const TabsContent = ({ value, children }) => {
  const { activeTab } = useContext(TabsContext)
  
  if (activeTab !== value) return null
  
  return (
    <div className="mt-4">
      {children}
    </div>
  )
}

export { Tabs, TabsList, TabsTrigger, TabsContent }

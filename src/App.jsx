import React, { useEffect, useState } from 'react'
import DeviceCard from './components/DeviceCard'

export default function App() {
  const [devices, setDevices] = useState([])

  useEffect(() => {
    fetch('/api/devices')
      .then(res => res.json())
      .then(setDevices)
  }, [])

  const handleUpdate = (ip) => {
    fetch(`/api/update?ip=${ip}`, { method: 'POST' })
      .then(res => res.json())
      .then(data => {
        alert(data.status)
        setDevices(prev => prev.map(d =>
          d.ip === ip ? { ...d, needs_update: false, bios_version: d.latest_bios } : d
        ))
      })
  }

  return (
    <main style={{ padding: '2rem' }}>
      <h1>Network BIOS Updater</h1>
      {devices.length === 0 ? (
        <p>Scanning network...</p>
      ) : (
        devices.map(device => (
          <DeviceCard key={device.ip} device={device} onUpdate={handleUpdate} />
        ))
      )}
    </main>
  )
}

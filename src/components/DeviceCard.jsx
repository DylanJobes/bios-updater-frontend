import React from 'react'

export default function DeviceCard({ device, onUpdate }) {
  return (
    <div style={{ border: '1px solid #ccc', margin: '1rem 0', padding: '1rem' }}>
      <h2>{device.hostname} ({device.ip})</h2>
      <p><strong>Vendor:</strong> {device.vendor}</p>
      <p><strong>Model:</strong> {device.model}</p>
      <p><strong>BIOS:</strong> {device.bios_version} → {device.latest_bios}</p>
      {device.needs_update ? (
        <button onClick={() => onUpdate(device.ip)}>Update BIOS</button>
      ) : (
        <p style={{ color: 'green' }}>Up to date</p>
      )}
    </div>
  )
}

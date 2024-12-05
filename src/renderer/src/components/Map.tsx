import React, { useRef, useEffect } from 'react'
import mapboxgl from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

interface MapComponentProps {
  initialLongitude?: number
  initialLatitude?: number
  initialZoom?: number
}

const MapComponent: React.FC<MapComponentProps> = ({
  initialLongitude = -74.5,
  initialLatitude = 40,
  initialZoom = 9
}) => {
  const mapContainer = useRef<HTMLDivElement>(null)
  const map = useRef<mapboxgl.Map | null>(null)

  useEffect(() => {
    if (mapContainer.current) {
      mapboxgl.accessToken =
        'pk.eyJ1Ijoiam9obm55dCIsImEiOiJja2xxNXplNjYwNnhzMm5uYTJtdHVlbTByIn0.f1GfZbFLWjiEayI6hb_Qvg'

      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [initialLongitude, initialLatitude],
        zoom: initialZoom
      })
    }

    return (): void => {
      map.current?.remove()
    }
  }, [initialLongitude, initialLatitude, initialZoom])

  return <div ref={mapContainer} style={{ width: '100vw', height: '100vh' }} />
}

export default MapComponent

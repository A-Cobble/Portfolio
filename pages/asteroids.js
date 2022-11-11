import dynamic from "next/dynamic"

const DynamicAsteroids = dynamic(() => import('../components/projects_page/AsteroidsGame'), {
  ssr: false,
})

const asteroids = () => {
  return (
    <div>
        <DynamicAsteroids />
    </div>
  )
}

export default asteroids
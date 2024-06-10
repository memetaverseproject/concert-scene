import { Material, MeshRenderer, Transform, TransformType, TransformTypeWithOptionals, VideoPlayer, engine } from '@mtvproject/sdk/ecs'
import { Quaternion, Vector3 } from '@mtvproject/sdk/math'

export function createVideoScreens() {
  // #1
  const screen = engine.addEntity()
  MeshRenderer.setPlane(screen)
  Transform.create(screen, {
    scale: Vector3.create(24,13,24),
    position: Vector3.create(54.7,6.1,10.6),
    rotation: Quaternion.create(0,2.41,0,1)
  })

  const screen02 = engine.addEntity()
  MeshRenderer.setPlane(screen02)
  Transform.create(screen02, {
    scale: Vector3.create(24,13,24),
    position: Vector3.create(54,6.1,49),
    rotation: Quaternion.create(0,-2.42,0,1)
  })

  const screen03 = engine.addEntity()
  MeshRenderer.setPlane(screen03)
  Transform.create(screen03, {
   scale: Vector3.create(24,13,24),
    position: Vector3.create(62,6.1,30),
    rotation: Quaternion.create(0,1,0,1)
  })

  // #2
  VideoPlayer.create(screen, {
    src: "videos/Flashing_Lights.mp4",
    playing: true,
    loop: true
  })

  // #3
  const videoTexture = Material.Texture.Video({ videoPlayerEntity: screen })

  // #4
  Material.setPbrMaterial(screen, {
    texture: videoTexture,
    roughness: 1.0,
    specularIntensity: 0,
    metallic: 0
  })

  Material.setPbrMaterial(screen02, {
    texture: videoTexture,
    emissiveTexture: videoTexture,
    emissiveIntensity: 0.6,
    roughness: 1.0,
  })

  Material.setPbrMaterial(screen03, {
    texture: videoTexture,
    emissiveTexture: videoTexture,
    emissiveIntensity: 0.6,
    roughness: 1.0,
  })
}


import { ColliderLayer, GltfContainer, Rotate, Transform, engine } from "@mtvproject/sdk/ecs"
import { Quaternion, Vector3 } from "@mtvproject/sdk/math"
import * as utils from '@mtvproject/sdk-utils'
import { teleportTo } from "~system/RestrictedActions"

export function createBuilding() {
    const street = engine.addEntity()
    GltfContainer.create(street, {
      src: `models/concert.glb`,
      visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS
    })
    Transform.create(street, {
      position: Vector3.create(0, 0, 0),
      
    })


    createPortal()
}

function createPortal() {
  const portal = engine.addEntity()
  GltfContainer.create(portal, {
    src: `models/portal.glb`,
    visibleMeshesCollisionMask: ColliderLayer.CL_PHYSICS
  })
  Transform.create(portal, {
    position: Vector3.create(10, -0.3,32),
    rotation: Quaternion.create(0,-1,0,0)
  })

  utils.triggers.addTrigger(
    portal,
    utils.NO_LAYERS,
    utils.LAYER_1,
    [
      {
        type: 'box',
        scale: { x: 10, y: 10, z: 10 }
      }
    ],
    () => {
      teleportTo({worldCoordinates: {x: 0, y: 0}})
    }
  )
}
import React, { Component } from "react";
import ReactDOM from "react-dom";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";

class RenderRover extends Component {
  componentDidMount() {
    var parent = document.getElementById("threeDContainer");
    // parent.append(new THREE.WebGLRenderer().domElement);
    // document.body.appendChild(parent);

    var width = (parent.clientWidth / 3) * 2;
    var height = (parent.clientHeight / 5) * 4;
    var mobile = false;
    if (width < 768) {
      mobile = true;
    }

    var scene = new THREE.Scene();

    var ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
    scene.add(ambientLight);

    var keyLight = new THREE.DirectionalLight(
      new THREE.Color("hsl(30, 100%, 75%)"),
      1.0
    );
    keyLight.position.set(0, 30, 0);

    var fillLight = new THREE.DirectionalLight(
      new THREE.Color("hsl(240, 100%, 75%)"),
      0.75
    );
    fillLight.position.set(100, 45, 100);

    var spotLight = new THREE.SpotLight(0xffffff);
    spotLight.position.set(0, 100, 50);

    var backLight = new THREE.DirectionalLight(0xfffff, 1.0);
    backLight.position.set(100, 0, -100).normalize();

    const upColor = 0xffffff;
    const downColor = 0xffff80;
    var hemLight = new THREE.HemisphereLight(upColor, downColor, 0.5);

    // scene.add(hemLight);

    // scene.add(keyLight);
    // scene.add(fillLight);
    // scene.add(backLight);
    scene.add(spotLight);

    var renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    // document.body.appendChild( renderer.domElement );
    // use ref as a mount point of the Three.js scene instead of the document.body
    this.mount.appendChild(renderer.domElement);

    let loader = new GLTFLoader();
    var pivot = new THREE.Group();

    var rover;
    loader.load("./3D/rover_ver2/rover_ver2.gltf", function (gltf) {
      scene.add(gltf.scene);
      rover = gltf.scene.children[0];
      rover.shininess = 0;
      // var spawnPose = new THREE.Vector3(0, -10, 0);
      // spawnPose.setFromMatrixPosition(rover);
      var bbox = new THREE.Box3().setFromObject(scene);
      var cent = bbox.getCenter(new THREE.Vector3());

      var size = bbox.getSize(new THREE.Vector3());

      //Rescale the object to normalized space
      var maxAxis = Math.max(size.x, size.y, size.z);
      scene.scale.multiplyScalar(6 / maxAxis);
      bbox.setFromObject(scene);
      bbox.getCenter(cent);
      bbox.getSize(size);
      //Reposition to 0,halfY,0
      scene.position.copy(cent);
      if (mobile) {
        scene.position.y = 10;
      }
    });

    var camera = new THREE.PerspectiveCamera(35, width / height, 0.1, 1000);
    if (width < 768) {
      camera.position.x = 3;
      camera.position.y = 25;
      camera.position.z = 25;
    } else {
      camera.position.x = 5;
      camera.position.y = 5;
      camera.position.z = 20;
    }
    camera.lookAt(scene.position);
    var rotSwitch = false;

    var animate = function () {
      requestAnimationFrame(animate);

      if (rover) {
        if (mobile) {
          rover.rotation.y -= 0.005;
        } else {
          rover.rotation.y -= 0.005;
          if (rover.rotation.y > 1.57 || rover.rotation.y < -1.57) {
            rotSwitch = !rotSwitch;
          }

          if (rotSwitch) {
            camera.position.z += 0.01;
          } else {
            camera.position.z -= 0.01;
          }
        }
      }
      renderer.render(scene, camera);
    };

    animate();
  }
  render() {
    return <div ref={(ref) => (this.mount = ref)} />;
  }
}

export default RenderRover;

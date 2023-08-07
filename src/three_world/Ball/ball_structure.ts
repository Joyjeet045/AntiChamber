import * as THREE from "three";
import ballTexture from "/earth.avif";

export default function () {
	const textureLoader = new THREE.TextureLoader();
	const sphereGeometry = new THREE.SphereGeometry(4, 50, 50);
	// const sphereMaterial = new THREE.MeshStandardMaterial({
	// 	map: textureLoader.load(ballTexture),
	// });
	const sphereMaterial = new THREE.MeshPhysicalMaterial({
		map: textureLoader.load(ballTexture), // Change color to desired color
		transparent: true, // Make the material transparent
		side: THREE.DoubleSide, // Ensure both sides of the material are visible
		metalness: 0.1, // Adjust the metalness parameter for reflection
		roughness: 0.1, // Adjust the roughness parameter for blurriness
		transmission: 0.1, // Adjust the transmission parameter for refraction (0.0 - no refraction, 1.0 - full refraction)
		// opacity: 0.8, // Adjust the opacity (0.0 - fully transparent, 1.0 - fully opaque)
		envMapIntensity: 1.0,
	});
	const ballMesh = new THREE.Mesh(sphereGeometry, sphereMaterial);

	return ballMesh;
}

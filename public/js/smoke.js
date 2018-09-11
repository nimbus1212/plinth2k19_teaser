var camera, scene, renderer, geometry, material, mesh;

function init() {
    for (stats = new Stats, stats.setMode(0), stats.domElement.style.position = "absolute", stats.domElement.style.left = "0px", stats.domElement.style.top = "0px", clock = new THREE.Clock, (renderer = new THREE.WebGLRenderer).setSize(window.innerWidth, window.innerHeight), scene = new THREE.Scene, (camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 1e4)).position.z = 1e3, scene.add(camera), geometry = new THREE.CubeGeometry(200, 200, 200), material = new THREE.MeshLambertMaterial({
            color: 11167334,
            wireframe: !1
        }), mesh = new THREE.Mesh(geometry, material), cubeSineDriver = 0, screen.width >= 1920 ? textGeo = new THREE.PlaneGeometry(250, 200) : screen.width >= 1330 && screen.width <= 1919 ? textGeo = new THREE.PlaneGeometry(250, 200) : screen.width <= 1329 && screen.width >= 950 ? textGeo = new THREE.PlaneGeometry(250, 190) : screen.width <= 949 && screen.width >= 770 ? textGeo = new THREE.PlaneGeometry(190, 150) : screen.width <= 769 && screen.width >= 625 ? textGeo = new THREE.PlaneGeometry(240, 150) : screen.width <= 624 && screen.width >= 300 && (textGeo = new THREE.PlaneGeometry(180, 130)), THREE.ImageUtils.crossOrigin = "", textTexture = THREE.ImageUtils.loadTexture("comingsoon_plinth.png"), textMaterial = new THREE.MeshLambertMaterial({
            color: 65535,
            opacity: 3,
            map: textTexture,
            transparent: !0,
            blending: THREE.AdditiveBlending
        }), text = new THREE.Mesh(textGeo, textMaterial), screen.width >= 1920 ? (text.position.z = 800, text.position.x = 15, text.position.y = -70) : screen.width >= 1330 && screen.width <= 1919 ? (text.position.z = 800, text.position.x = 10, text.position.y = -100) : screen.width <= 1329 && screen.width >= 950 ? 1280 === screen.width ? (text.position.z = 800, text.position.x = 15, text.position.y = -90) : (text.position.z = 800, text.position.x = 10, text.position.y = -95) : screen.width <= 949 && screen.width >= 779 ? (text.position.z = 800, text.position.x = 0, text.position.y = -120) : screen.width <= 769 && screen.width >= 625 ? screen.width > screen.height ? (text.position.z = 800, text.position.x = 0, text.position.y = -70) : (text.position.z = 800, text.position.x = 0, text.position.y = -90) : screen.width <= 624 && screen.width >= 300 && (screen.width > screen.height ? (text.position.z = 800, text.position.x = 0, text.position.y = -70) : (text.position.z = 800, text.position.x = 0, text.position.y = -50)), setTimeout(function () {
            scene.add(text)
        }, 3e3), light = new THREE.DirectionalLight(16777215, .5), light.position.set(-1, 0, 1), scene.add(light), smokeTexture = THREE.ImageUtils.loadTexture("Smoke-Element.png"), smokeMaterial = new THREE.MeshLambertMaterial({
            color: 56797,
            map: smokeTexture,
            transparent: !0
        }), smokeGeo = new THREE.PlaneGeometry(300, 300), smokeParticles = [], p = 0; p < 130; p++) {
        var e = new THREE.Mesh(smokeGeo, smokeMaterial);
        e.position.set(500 * Math.random() - 250, 500 * Math.random() - 250, 1e3 * Math.random() - 100), e.rotation.z = 360 * Math.random(), scene.add(e), smokeParticles.push(e)
    }
    document.body.appendChild(renderer.domElement)
}

function animate() {
    stats.begin(), delta = clock.getDelta(), requestAnimationFrame(animate), evolveSmoke(), render(), stats.end()
}

function evolveSmoke() {
    for (var e = smokeParticles.length; e--;) smokeParticles[e].rotation.z += .2 * delta
}

function render() {
    mesh.rotation.x += .005, mesh.rotation.y += .01, cubeSineDriver += .01, mesh.position.z = 100 + 500 * Math.sin(cubeSineDriver), renderer.render(scene, camera)
}
init(), animate();
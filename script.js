window.onload = function() {
    const canvas = document.getElementById('gameCanvas');
    const ctx = canvas.getContext('2d');

    // Load the background image
    const backgroundImage = new Image();
    backgroundImage.src = 'images/board.png'; // Replace 'images/board.png' with the path to your background image

    // Once the image is loaded, draw it onto the canvas
    backgroundImage.onload = function() {
        // Set canvas size to match image size
        canvas.width = backgroundImage.width;
        canvas.height = backgroundImage.height;

        // Draw background image
        ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
        
        function drawNeigbourSquare(centerX, centerY) {
            // Draw a rectangle around the center of the image
            const rectWidth = 67;
            const rectHeight = 60;

            // Draw filled rectangle representing the selected area
            ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
            ctx.fillRect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);

            // Draw outline around the selected area
            ctx.strokeStyle = 'rgb(1, 44, 1)'; // Outline color
            ctx.lineWidth = 2; // Outline width
            ctx.strokeRect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
         
        }

        function makeBlocksClickable() {
            const start_position_x = (backgroundImage.width / 2) - 1 -122*2;
            const start_position_y = (backgroundImage.height / 2) - 7 -112*2;
            const rectWidth = 67;
            const rectHeight = 60;

            // Draw filled rectangle representing the selected area
            ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
            ctx.fillRect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);

            // Draw outline around the selected area
            ctx.strokeStyle = 'rgb(1, 44, 1)'; // Outline color
            ctx.lineWidth = 2; // Outline width
            ctx.strokeRect(centerX - rectWidth / 2, centerY - rectHeight / 2, rectWidth, rectHeight);
        }
        // Draw a rectangle around the center of the image

        const start_position_x = (backgroundImage.width / 2) - 1 -122*2;
        const start_position_y = (backgroundImage.height / 2) - 7 -112*2;
        const rectWidth = 67;
        const rectHeight = 60;

        // Draw filled rectangle representing the selected area
        // ctx.fillStyle = 'rgba(0, 255, 0, 0.3)';
        // ctx.fillRect(start_position_x - rectWidth / 2, start_position_y - rectHeight / 2, rectWidth, rectHeight);

        // Draw outline around the selected area
        // ctx.strokeStyle = 'rgb(1, 44, 1)'; // Outline color
        // ctx.lineWidth = 2; // Outline width
        // ctx.strokeRect(start_position_x - rectWidth / 2, start_position_y - rectHeight / 2, rectWidth, rectHeight);
        
        const block_to_coordinates = {};
        function allBlocksCenter(block_to_coordinates) {
        // loop for making a dictionary corresponding graphical view and mathematical view
    
        // # origin here is considered as the position of the first block
        var origin_x = start_position_x;
        var origin_y = start_position_y;
        var total_counter = 1;
        for (let i = 0; i < 5; i++) { //outer loop traverses y axis
            for (let j = 0; j < 5; j++) { //inner loop traverse x axis
                block_to_coordinates[(total_counter).toString()] = [origin_x, origin_y];
                origin_x += 122;
                total_counter += 1;
            }
            origin_x = start_position_x;
            origin_y += 112;
        }
    }
        allBlocksCenter(block_to_coordinates)
        // Log each key-value pair in block_to_coordinates
        for (let key in block_to_coordinates) {
            if (block_to_coordinates.hasOwnProperty(key)) {
                console.log(`${key}: [${block_to_coordinates[key].join(', ')}]`);
            }
        }

        const connectedNodes = {
            '1': ['2', '6', '7'], '2': ['1', '3', '7'], '3': ['2', '4', '7', '8', '9'], '4': ['3', '5', '9'],
            '5': ['4', '9', '10'], '6': ['1', '7', '11'], '7': ['1', '2', '3', '6', '8', '11', '12', '13'],
            '8': ['3', '7', '9', '13'], '9': ['3', '4', '5', '8', '10', '13', '14', '15'], '10': ['5', '9', '15'],
            '11': ['6', '7', '12', '16', '17'], '12': ['7', '11', '13', '17'],
            '13': ['7', '8', '9', '12', '14', '17', '18', '19'],
            '14': ['9', '13', '15', '19'], '15': ['9', '10', '14', '19', '20'], '16': ['11', '17', '21'],
            '17': ['11', '12', '13', '16', '18', '21', '22', '23'], '18': ['13', '17', '19', '23'],
            '19': ['13', '14', '15', '18', '20', '23', '24', '25'], '20': ['15', '19', '25'],
            '21': ['16', '17', '22'], '22': ['17', '21', '23'], '23': ['17', '18', '19', '22', '24'],
            '24': ['19', '23', '25'], '25': ['19', '20', '24']
        }
        
        let currentPlayerPostion = connectedNodes['13']
        function findNeigbourSquare(currentPlayerPostion) {
        
            for (let i = 0; i < currentPlayerPostion.length; i++) {
                block_no = currentPlayerPostion[i];
                let centerX =  block_to_coordinates[block_no][0];
                let centerY =  block_to_coordinates[block_no][1];
                console.log(block_to_coordinates[block_no][0], block_to_coordinates[block_no][1]);
                drawNeigbourSquare(centerX, centerY)    
            }
        }
        findNeigbourSquare(currentPlayerPostion)
        const playerImageBlack = new Image();
    playerImageBlack.src = "images/black_pawn.png"
    playerImageBlack.onload = function() {
        const firstBlockCoordinates = block_to_coordinates['13'];
            const playerX = firstBlockCoordinates[0] - 30;
            const playerY = firstBlockCoordinates[1] - 30;
    ctx.drawImage(playerImageBlack, playerX, playerY, 60, 60);
    };
    };


    
};

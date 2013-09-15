import java.awt.*;
import java.util.Random;

import javax.swing.JPanel;

public class LifeGame extends JPanel //Modified by Jake Trower
{
	private static final long serialVersionUID = 1673365324417725123L;
	public boolean[][] grid;
	public int res = 4;
	public LifeGame()
	{
		Random rand = new Random(System.currentTimeMillis());

		grid = new boolean[GameOfLife.FRAME_HEIGHT/res][GameOfLife.FRAME_WIDTH/res];
		for (int i = 0; i < GameOfLife.FRAME_HEIGHT/res; i++){
			for (int j = 0; j < GameOfLife.FRAME_WIDTH/res; j++){
				grid[i][j] = rand.nextBoolean();
			}
		}
	}
	
	@Override
	public void update(Graphics g)
	{
		//super.update(g);
		int width = GameOfLife.FRAME_WIDTH/res;
		int height = GameOfLife.FRAME_HEIGHT/res;
		
		boolean[][] nextGen = new boolean[height][width];
		for (int i = 0; i < height; i++){
			for (int j = 0; j < width; j++){
				int numLiveNeighbors = 0;
				int x;
				int y;
				//check for left neighbor/////////////////////////////////////
				x = j-1; y = i;
				if (x < 0) x = width-1; 
				if (grid[y][x])
					numLiveNeighbors++;
				//check for LEFT + TOP neighbor//////////////////////////////
				x = j-1; y = i-1;
				if (x < 0) x = width-1;
				if (y < 0) y = height-1;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for top neighbor/////////////////////////////////////
				x = j; y = i-1;
				if (y < 0) y = height-1;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for RIGHT + TOP neighbor////////////////////////////////
				x = j+1; y = i-1;
				if (x >= width) x = 0;
				if (y < 0) y = height-1;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for right neighbor/////////////////////////////////////
				x = j+1; y = i;
				if (x >= width) x = 0;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for RIGHT + BOTTOM neighbor///////////////////////////
				x = j+1; y = i+1;
				if (x >= width) x = 0;
				if (y >= height) y = 0;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for BOTTOM neighbor///////////////////////////////////
				x = j; y = i+1;
				if (y >= height) y = 0;
				if (grid[y][x])
					numLiveNeighbors++;
				//check for LEFT + BOTTOM neighbor////////////////////////////
				x = j-1; y = i+1;
				if (x < 0) x = width-1;
				if (y >= height) y = 0;
				if (grid[y][x])
					numLiveNeighbors++;
				
				nextGen[i][j] = grid[i][j];
				if (grid[i][j]){
					if (numLiveNeighbors < 2)
						nextGen[i][j] = false;
					else if (numLiveNeighbors > 3)
						nextGen[i][j] = false;
				}else if (numLiveNeighbors == 3)
					nextGen[i][j] = true;
			}
		}
		
		//ASSIGN NEXT GEN
		grid = null;
		grid = nextGen.clone();
		nextGen = null;
		
		super.repaint();
	}
   

	@Override
	public void paintComponent(Graphics g)
	{
		super.paintComponent(g);
		
		//CLEAR SCREEN
		g.setColor(Color.black);
		g.fillRect(0, 0, GameOfLife.FRAME_WIDTH, GameOfLife.FRAME_HEIGHT);
		
		g.setColor(Color.orange);
		for (int i = 0; i < GameOfLife.FRAME_HEIGHT/res; i++){
			for (int j = 0; j < GameOfLife.FRAME_WIDTH/res; j++){
				if (grid[i][j]){
					g.fillRect(j*res, i*res, res, res);
				}
			}
		}
	}
}	
import javax.swing.JFrame;


public class GameOfLife {
	public static int FRAME_WIDTH = 640;
	public static int FRAME_HEIGHT = 480;
	
	public static void main(String[] args)
	{		   
	    LifeGame panel = new LifeGame();
	      
	    JFrame application = new JFrame("Conway's Game of Life - Jake Trower"); // creates a new JFrame

	    application.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
	    application.add(panel); // add the panel to the frame
	    application.setSize(FRAME_WIDTH+16, FRAME_HEIGHT+38); // set the desired size
	    //application.setResizable(false);
	    application.setVisible(true); // show the frame
	    
	    long refreshRate = 120; //in milliseconds
	    long lastTime = System.currentTimeMillis();
	    while(true)
	    {
	    	if (System.currentTimeMillis() >= lastTime + refreshRate){
	    		lastTime += refreshRate;
	    		panel.update(panel.getGraphics());
	    	}
	    }
	}
}

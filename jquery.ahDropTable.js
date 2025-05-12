/*!
 * AhDropTable - jQuery Plugin
 * Author: Andrianiriana.hery (ou pseudo GitHub)
 * GitHub: https://github.com/tonutilisateur/ahdroptable
 * License: MIT
 */
		
class AhDropTable{
	constructor(selector="#myDropTable", options={}){
		const{
			pplIcon="plugins/feather-icon/icons/box.svg",
			colvisIcon="plugins/feather-icon/icons/eye.svg"
		}=options;
		try{
			this.pplIcon=pplIcon;
			this.colvisIcon=colvisIcon;
			this.$el=$(selector);
			this.selector=selector;
			this.mainContainerSelector=".ahDropTableContainer";
			this.bodySelector=".ahDropTableContainer li.dropdown ul.dropdown-menu li.body";
			this.tableSelector=this.bodySelector+" table";
			this.defaultData=[
						{
							"name":       "Tiger Nixon",
							"position":   "System Architect",
							"salary":     "$3,120",
							"start_date": "2011/04/25",
							"office":     "Edinburgh",
							"extn":       "5421"
						},
						{
							"name":       "Garrett Winters",
							"position":   "Director",
							"salary":     "$5,300",
							"start_date": "2011/07/25",
							"office":     "Edinburgh",
							"extn":       "8422"
						}
					];
			this.init();
		}catch(err){
			console.error(err)
		}
	}
	
	init(){
		let str=this.sklt();
		
		this.$el.html(str)
		
		//btn ppl
		let mainbtnSelector=this.mainContainerSelector+" .dropdown a.btnMain"
		$(mainbtnSelector).on("click",(e)=>{
			e.preventDefault(); // Empêche le comportement par défaut du lien
			let o=$(e.target).closest("li").find(".dropdown-menu");
			o.slideToggle();
			console.log("test2");
			return 0;
			}) 
		//escape
		$(this.mainContainerSelector).on("keyup",(e)=>{
			
			switch(e.key){
				case "Escape":
				let o=$(e.target).closest("li").find(".dropdown-menu");
				o.slideToggle();
				break;
			
			}
		})
		
		//DataTable inside
		this.tableInit();
		
		console.log("init on ", this.$el);
	}
	
	skltTable(){
		return `<table style="width:100%" class="table table-striped table-bordered table-hover"></table>`
	}
	
	setData(data){
		try{
			this.defaultData=data;
			this.tableInit();
		}catch(err){
			alert(err)
		}
	}
	
	tableInit(){
		$(this.bodySelector).html(this.skltTable());
		let colnames=Object.keys(this.defaultData[0])
		
		let cols=colnames.map(cName=>({title:`${cName}`,data:`${cName}`}) )
		$(this.tableSelector).DataTable({
			select:true,
			data:this.defaultData,
			columns:cols,
			dom: 'Bfrtip',
			buttons: [
			  {
				extend: 'colvis',
				text: `<img src="${this.colvisIcon}" alt="" class="feather-icon-red">`
			  }
			]
		});
	}
	
	sklt(){
		return `<div class="ahDropTableContainer">
<li class="dropdown" >
	<a href="javascript:void(0);" class="btnMain btn btn-white waves-effect neon-button" role="button"> <img src="${this.pplIcon}" alt="" class="feather-icon-red">
 <span class="label-count"></span>
	</a>
	<ul class="dropdown-menu" >
		<li class="header"></li>
		<li class="body">
		  <ul class="menu tasks" style=''>
		  
		  </ul>
		</li>
		<li class="footer">
			<ul>
			<li><a href="javascript:void(0);" class="btn-save"></a></li>
			<li><a href="javascript:void(0);" class="btn-cancel"> "Esc" pour Annuler</a></li>
			</ul>
			
		</li>
	</ul>
</li>
</div>	`
	}
	
	
}

// Attache comme plugin jQuery
$.fn.AhDropTable = function () {
  return this.each(function () {
    // Sauvegarde une instance attachée à l'élément DOM
    if (!$.data(this, 'AhDropTable')) {
      $.data(this, 'AhDropTable', new AhDropTable(this));
    }
  });
};
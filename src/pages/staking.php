<!DOCTYPE html>
<?php include('libraries/login_verification.php'); ?>

<!-- * HEAD -->

<head>
	<html lang="en" dir="ltr">
	<title>Heroes of Lowhelm | Staking</title>
	<link rel="stylesheet" type="text/css" href="scss/staking.css">
	<?php include('modules/head.php') ?>
</head>

<!-- * BODY -->

<body>
	<!-- * Header -->
	<?php include('modules/header.php') ?>

	<!-- * Main -->
	<main class="main">
		<section class="container hero-section">
			<div class="wrapper">
				<div class="hero-image">
					<div class="row justify-content-start mb-full-hieght">
						<div class="col-6 col-sm-12 mb-hol-context">
							<div class="hero-context">
								<div class="hero-context-head">
									<h1 style="--delay: .7s;">STAKING PORTAL</h1>
									<p style="--delay: .9s;">Stake $HOL and earn shares of premium summons & in-game marketplace sales</p>
									<div class="divider" style="--delay: 1s;"></div>
								</div>
								<div class="hero-context-body" style="--delay: 1.1s;">
									<p>70% of Premium Hero Summons & Premium Equipment Summons will be routed as rewards to the staking contract on the daily.<br />
										5% of the In-game Marketplace Sales will be routed as rewards to the staking contract on the daily. Stakers will earn a portion of the emissions based on their pool share. You may claim your earning whenever you wish by clicking the CLAIM button and paying gas.
										<br />
										This staking contract is only available on the Ziliqa network.
										<br />
										For security reasons, rewards are manually deposited for the time being.</p>
								</div>
								<div>
									<a title="Login/Register" class="hol-read-more" id="read_more">READ MORE</a>
								</div>
							</div>

						</div>
						<div class="col-6 col-sm-12 mbhero" style="position:relative">
							<div class="hero"></div>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="staking">
			<div class="wrapper">
				<div class="container">
					<div class="row">
						<div class="col stake_container stake-left" style="--delay: .7s;">
							<div class="outer-border-white">
								<div class="outer-border">
									<div class="_qwertystake">
										<div class="top-left"></div>
										<div class="top-right"></div>
										<div class="bottom-right"></div>
										<div class="bottom-left"></div>
										<div class="row">
											<form method="POST" autocomplete="off">
												<p class="label-text">Add stake</p>
												<div class="add-stake-field">
													<input type="text" name="amount" required placeholder="Amount" id="add_stake">
													<div id="amount"></div>
													<button class="btn-max" name="max" id="max">Max</button>
												</div>
												<button name="stake" type="submit" class="btn-stake">Stake</button>
											</form>
										</div>
										<div class="row">
											<form action="#" autocomplete="off">
												<p class="label-text">Remove stake</p>
												<input type="text" name="amount" placeholder="Amount">
												<button name="stake" type="submit" class="btn-stake">Unstake</button>
											</form>
										</div>
									</div>
								</div>
							</div>
						</div>
						<!-- RIGHT SIDE -->
						<div class="col stake_container stake-right" style="--delay: .7s;">
							<!-- RIGHT-TOP -->
							<div class="outer-border-white mrg-btm">
								<div class="outer-border">
									<div class="row _qwerty_storage">
										<div class="top-right"></div>
										<div class="top-left"></div>
										<div class="bottom-right"></div>
										<div class="bottom-left"></div>
										<div class="row">
											<form action="#">
												<p class="label-text">My $HOL Staking
													<span class="_qwerty_alternative sub_label">Connect Wallet to see address</span>
												</p>
												<p class="total-staked-label">TOTAL STAKED</p>
												<span class="stake_value" id="wallet_value">100,000</span>
												<button name="stake" type="button" class="btn-stake btn_wallet" id="btn_wallet">Connect to Zilpay Wallet</button>
											</form>
										</div>
									</div>
								</div>
							</div>
							<!-- RIGHT-BOTTOM -->
							<div class="row">
								<!-- RIGHT-BOTTOM-LEFT -->
								<div class="col">
									<div class="outer-border-white">
										<div class="outer-border">
											<div class="row _qwerty_storage _margin_left">
												<div class="top-right"></div>
												<div class="top-left"></div>
												<div class="bottom-right"></div>
												<div class="bottom-left"></div>
												<div class="row">
													<form action="#">
														<p class="label-text sub_label">OVERALL NETWORK STAKED <span class="_qwerty_alternative">$HOL</span></p>
														<span class="stake_value">999,123,000</span>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
								<!-- RIGHT-BOTTOM-RIGHT -->
								<div class="col">
									<div class="outer-border-white">
										<div class="outer-border">
											<div class="row _qwerty_storage">
												<div class="top-right"></div>
												<div class="top-left"></div>
												<div class="bottom-right"></div>
												<div class="bottom-left"></div>
												<div class="row qwerty-rewards">
													<form action="#">
														<p class="label-text sub_label">ESTIMATED REWARDS<br><span class="_qwerty_alternative">$HOL</span></p>
														<span class="stake_value">999,123,000</span>
														<button name="stake" type="button" class="btn-stake btn_connect" id="claim_reward">Claim Rewards!</button>
													</form>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	</main>

	<!-- * Footer -->
	<?php include('modules/footer.php') ?>

	<!-- * Activate Scripts -->
	<?php include('modules/scripts.php') ?>

	<script type="text/javascript">
		$(".header-navigation-item-staking").addClass("header-navigation-item-active");
	</script>
</body>

</html>
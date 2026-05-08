# `actionsEnvironmentSecret` Submodule <a name="`actionsEnvironmentSecret` Submodule" id="@cdktn/provider-github.actionsEnvironmentSecret"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ActionsEnvironmentSecret <a name="ActionsEnvironmentSecret" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret"></a>

Represents a {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret github_actions_environment_secret}.

#### Initializers <a name="Initializers" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecret;

ActionsEnvironmentSecret.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environment(java.lang.String)
    .repository(java.lang.String)
    .secretName(java.lang.String)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .value(java.lang.String)
//  .valueEncrypted(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.environment">environment</a></code> | <code>java.lang.String</code> | Name of the environment. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.keyId">keyId</a></code> | <code>java.lang.String</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.value">value</a></code> | <code>java.lang.String</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.environment"></a>

- *Type:* java.lang.String

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.repository"></a>

- *Type:* java.lang.String

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.secretName"></a>

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.encryptedValue"></a>

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.id"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.keyId"></a>

- *Type:* java.lang.String

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#key_id ActionsEnvironmentSecret#key_id}

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.plaintextValue"></a>

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.value"></a>

- *Type:* java.lang.String

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value ActionsEnvironmentSecret#value}

---

##### `valueEncrypted`<sup>Optional</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.Initializer.parameter.valueEncrypted"></a>

- *Type:* java.lang.String

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value_encrypted ActionsEnvironmentSecret#value_encrypted}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue">resetEncryptedValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetKeyId">resetKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue">resetPlaintextValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValue">resetValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValueEncrypted">resetValueEncrypted</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetEncryptedValue` <a name="resetEncryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetEncryptedValue"></a>

```java
public void resetEncryptedValue()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetId"></a>

```java
public void resetId()
```

##### `resetKeyId` <a name="resetKeyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetKeyId"></a>

```java
public void resetKeyId()
```

##### `resetPlaintextValue` <a name="resetPlaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetPlaintextValue"></a>

```java
public void resetPlaintextValue()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValue"></a>

```java
public void resetValue()
```

##### `resetValueEncrypted` <a name="resetValueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.resetValueEncrypted"></a>

```java
public void resetValueEncrypted()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ActionsEnvironmentSecret resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecret;

ActionsEnvironmentSecret.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecret;

ActionsEnvironmentSecret.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecret;

ActionsEnvironmentSecret.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecret;

ActionsEnvironmentSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ActionsEnvironmentSecret.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ActionsEnvironmentSecret resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ActionsEnvironmentSecret to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ActionsEnvironmentSecret that should be imported.

Refer to the {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ActionsEnvironmentSecret to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.remoteUpdatedAt">remoteUpdatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryId">repositoryId</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput">encryptedValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput">environmentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyIdInput">keyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput">plaintextValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput">repositoryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput">secretNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncryptedInput">valueEncryptedInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment">environment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyId">keyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository">repository</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName">secretName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `remoteUpdatedAt`<sup>Required</sup> <a name="remoteUpdatedAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.remoteUpdatedAt"></a>

```java
public java.lang.String getRemoteUpdatedAt();
```

- *Type:* java.lang.String

---

##### `repositoryId`<sup>Required</sup> <a name="repositoryId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryId"></a>

```java
public java.lang.Number getRepositoryId();
```

- *Type:* java.lang.Number

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `encryptedValueInput`<sup>Optional</sup> <a name="encryptedValueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValueInput"></a>

```java
public java.lang.String getEncryptedValueInput();
```

- *Type:* java.lang.String

---

##### `environmentInput`<sup>Optional</sup> <a name="environmentInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environmentInput"></a>

```java
public java.lang.String getEnvironmentInput();
```

- *Type:* java.lang.String

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `keyIdInput`<sup>Optional</sup> <a name="keyIdInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyIdInput"></a>

```java
public java.lang.String getKeyIdInput();
```

- *Type:* java.lang.String

---

##### `plaintextValueInput`<sup>Optional</sup> <a name="plaintextValueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValueInput"></a>

```java
public java.lang.String getPlaintextValueInput();
```

- *Type:* java.lang.String

---

##### `repositoryInput`<sup>Optional</sup> <a name="repositoryInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repositoryInput"></a>

```java
public java.lang.String getRepositoryInput();
```

- *Type:* java.lang.String

---

##### `secretNameInput`<sup>Optional</sup> <a name="secretNameInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretNameInput"></a>

```java
public java.lang.String getSecretNameInput();
```

- *Type:* java.lang.String

---

##### `valueEncryptedInput`<sup>Optional</sup> <a name="valueEncryptedInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncryptedInput"></a>

```java
public java.lang.String getValueEncryptedInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `encryptedValue`<sup>Required</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `keyId`<sup>Required</sup> <a name="keyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

---

##### `plaintextValue`<sup>Required</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `valueEncrypted`<sup>Required</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.valueEncrypted"></a>

```java
public java.lang.String getValueEncrypted();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecret.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ActionsEnvironmentSecretConfig <a name="ActionsEnvironmentSecretConfig" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.Initializer"></a>

```java
import io.cdktn.providers.github.actions_environment_secret.ActionsEnvironmentSecretConfig;

ActionsEnvironmentSecretConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .environment(java.lang.String)
    .repository(java.lang.String)
    .secretName(java.lang.String)
//  .encryptedValue(java.lang.String)
//  .id(java.lang.String)
//  .keyId(java.lang.String)
//  .plaintextValue(java.lang.String)
//  .value(java.lang.String)
//  .valueEncrypted(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment">environment</a></code> | <code>java.lang.String</code> | Name of the environment. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository">repository</a></code> | <code>java.lang.String</code> | Name of the repository. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName">secretName</a></code> | <code>java.lang.String</code> | Name of the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue">encryptedValue</a></code> | <code>java.lang.String</code> | Encrypted value of the secret using the GitHub public key in Base64 format. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.keyId">keyId</a></code> | <code>java.lang.String</code> | ID of the public key used to encrypt the secret. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue">plaintextValue</a></code> | <code>java.lang.String</code> | Plaintext value of the secret to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.value">value</a></code> | <code>java.lang.String</code> | Plaintext value to be encrypted. |
| <code><a href="#@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.valueEncrypted">valueEncrypted</a></code> | <code>java.lang.String</code> | Value encrypted with the GitHub public key, defined by key_id, in Base64 format. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `environment`<sup>Required</sup> <a name="environment" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.environment"></a>

```java
public java.lang.String getEnvironment();
```

- *Type:* java.lang.String

Name of the environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#environment ActionsEnvironmentSecret#environment}

---

##### `repository`<sup>Required</sup> <a name="repository" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.repository"></a>

```java
public java.lang.String getRepository();
```

- *Type:* java.lang.String

Name of the repository.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#repository ActionsEnvironmentSecret#repository}

---

##### `secretName`<sup>Required</sup> <a name="secretName" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.secretName"></a>

```java
public java.lang.String getSecretName();
```

- *Type:* java.lang.String

Name of the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#secret_name ActionsEnvironmentSecret#secret_name}

---

##### `encryptedValue`<sup>Optional</sup> <a name="encryptedValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.encryptedValue"></a>

```java
public java.lang.String getEncryptedValue();
```

- *Type:* java.lang.String

Encrypted value of the secret using the GitHub public key in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#encrypted_value ActionsEnvironmentSecret#encrypted_value}

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#id ActionsEnvironmentSecret#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `keyId`<sup>Optional</sup> <a name="keyId" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.keyId"></a>

```java
public java.lang.String getKeyId();
```

- *Type:* java.lang.String

ID of the public key used to encrypt the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#key_id ActionsEnvironmentSecret#key_id}

---

##### `plaintextValue`<sup>Optional</sup> <a name="plaintextValue" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.plaintextValue"></a>

```java
public java.lang.String getPlaintextValue();
```

- *Type:* java.lang.String

Plaintext value of the secret to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#plaintext_value ActionsEnvironmentSecret#plaintext_value}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Plaintext value to be encrypted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value ActionsEnvironmentSecret#value}

---

##### `valueEncrypted`<sup>Optional</sup> <a name="valueEncrypted" id="@cdktn/provider-github.actionsEnvironmentSecret.ActionsEnvironmentSecretConfig.property.valueEncrypted"></a>

```java
public java.lang.String getValueEncrypted();
```

- *Type:* java.lang.String

Value encrypted with the GitHub public key, defined by key_id, in Base64 format.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/integrations/github/6.12.1/docs/resources/actions_environment_secret#value_encrypted ActionsEnvironmentSecret#value_encrypted}

---



